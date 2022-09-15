import Modal from "../components/Modal";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import Head from "next/head";
import Footer from "../components/Footer";
import { AuthContext } from "../stores/AuthContext";
import { modalState } from "../atoms/atomModal";
import requests from "../utils/request";
import { Movie } from "../typing";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { myListState } from "../atoms/atomMyList";


interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  const router = useRouter();
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (!sessionStorage.getItem('user')) {
      router.replace("/login");
    }
  }, [user]);

  // const [myListMovies, setMyListMovies] = useRecoilState(myListState);

  // useEffect(() => {
  //   console.log('RUNNING...');
  //   console.log(user)
  //   const storedList = sessionStorage.getItem(JSON.stringify(user));
  //   console.log('STORE:',storedList)
  //   if (storedList) {
  //     setMyListMovies(JSON.parse(storedList))
  //   } else {
  //     setMyListMovies([])
  //   }
  // }, [])

  const showModal = useRecoilValue(modalState);
  return (
    <div className="relative">
      <Head>
        <title>Home - Nexflit</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      <main className="relative">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="absolute top-[40vw] right-0 sm:top-[42vw] middle:top-[45vw] 2xl:top-[42vw] space-y-10 left-4 sm:left-6 lg:left-16 pb-[20px]">
          <Row genre={"Netflix Original"} movies={netflixOriginals} />
          <Row genre={"Trending Now"} movies={trendingNow} />
          <Row genre={"Top Rated"} movies={topRated} />
          {/* Render my list movies */}
          {/* {myListMovies.length > 0 && <Row genre={"My List"} movies={myListMovies} />} */}
          <Row genre={"Action Movies"} movies={actionMovies} />
          <Row genre={"Comedy Movies"} movies={comedyMovies} />
          <Row genre={"Horror Movies"} movies={horrorMovies} />
          <Row genre={"Romance Movies"} movies={romanceMovies} />
          <Row genre={"Documentaries"} movies={documentaries} />
          <Footer />
        </section>
      </main>
      <div>
        {showModal && <Modal />}
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}
