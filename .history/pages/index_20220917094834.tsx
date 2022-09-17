import SideFooter from "../components/SideFooter";
import SignUpBar from "../components/SignUpBar";
import Link from "next/link";
import Head from "next/head";
import {CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';


function index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  if (loading) {
    return (<>
      <Link href={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className="cursor-pointer object-contain w-[120px] md:w-[170px] absolute top-6 left-[4.5vw]"
        />
      </Link>
      <div className="bg-black/10 flex items-center w-screen h-screen">
        <CircularProgress color="error" size={60} className="m-auto" />
      </div>
    </>
    );
  }
  return (
    <div>
      <Head>
        <title>Nexflit - Watch TV Shows Online, Watch Movies Online</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="relative top-0 z-50">
        <div className="bg-black/50 absolute top-0 left-0 right-0 w-[96vw] h-[120vh]"></div>
        <div className="absolute top-6 flex mx-[4.45vw] items-center w-[90vw] ">
          <Link href={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              className="cursor-pointer object-contain w-[120px] md:w-[170px] basis-1/12"
            />
          </Link>
          <div className="basis-11/12 flex justify-end">
            <Link href={"/register"}>
              <button className="w-[70px] h-[30px] md:w-[100px] md:h-[40px] bg-red-700 rounded">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute top-[25vh] w-screen md:top-[20vh]">
          <SignUpBar />
        </div>

        <div className="bg-black/70 absolute top-[100vh] h-[20vh] w-[97vw] xs:w-[98.9vw] px-[10vw]">
          <SideFooter />
        </div>

        <div className="w-[100%] overflow-hidden">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/c9061c43-8a1d-46b1-a5e4-9b6faddf4536/VN-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            className="min-w-[1100px] h-[100vh] w-[100%]"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
