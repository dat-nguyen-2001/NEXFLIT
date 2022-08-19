import Link from "next/link";
import LoginForm from "../components/LoginForm";
import SideFooter from "../components/SideFooter";
import { AuthContext } from "../stores/AuthContext";
import {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
function login() {
  
  return (
    <div>
      <div className="relative top-0 z-50">
        <div className="bg-black/50 absolute top-0 left-0 w-[98.9vw] h-[120vh]"></div>

        <Link href={"/"}>
          <img
            src="https://rb.gy/ulxxee"
            className="absolute top-5 left-16 cursor-pointer object-contain w-[170px]"
          />
        </Link>

        <div className="absolute top-[15vh] w-[90vw] left-[3vw] sm:w-[60vw] sm:left-[19vw] lg:max-w-[500px] lg:left-[28vw] 2xl:w-[30vw] 2xl:left-[33.5vw]">
          <LoginForm />
        </div>

        <div className="bg-black/70 absolute top-[100vh] h-[20vh] w-[98.9vw] px-[10vw]">
          <SideFooter />
        </div>

        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/c9061c43-8a1d-46b1-a5e4-9b6faddf4536/VN-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            className="min-w-[1200px] h-[120vh]"
          />
        </div>
      </div>
    </div>
  );
}

export default login;
