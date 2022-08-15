import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-[200vh] bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Home - Nexflit</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      <main></main>
    </div>
  );
};

export default Home;
