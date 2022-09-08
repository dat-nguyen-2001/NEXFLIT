import Link from "next/link";
import { AuthContext } from "../stores/AuthContext";

import { useState, useEffect, useContext, useRef } from "react";

import { SearchIcon } from "@heroicons/react/solid";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {

  const { logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fix the header when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSearching, setIsSearching] = useState(false)
  const searchInput = useRef(null)

  useEffect(() => {
    if (document.activeElement !== searchInput.current) {
      setIsSearching(false)
    }
  }, [])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center basis-full md:mx-4 lg:mx-7">
        <div className="flex basis-4/5 space-x-8">
          <Link href={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              width={50}
              className="cursor-pointer object-contain lg:w-28 md:w-20 sm:w-16"
            />
          </Link>
          <ul className="hidden space-x-2.5 md:flex lg:space-x-5">
            <li className="cursor-default font-semibold headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>
        <div className="flex justify-end items-center basis-1/5 space-x-5">
          {isSearching ? <div className="absolute md:right-32 lg:relative lg:right-2 w-[250px] right-[15vw] bg-black/50 flex items-center h-[35px] border-white border-[1.5px]">
            <SearchIcon className="cursor-pointer w-5 lg:w-6 left-1 absolute" onClick={() => setIsSearching(false)} />
            <input
              placeholder="Titles, Peoples, Genres"
              ref={searchInput}
              className="absolute top-0 left-10 bg-black/0 w-[80%] h-[100%] outline-none" />
          </div> :
            <SearchIcon className="cursor-pointer w-5 lg:w-6" onClick={() => setIsSearching(true)} />
          }
          <NotificationsNoneIcon className="cursor-pointer hidden lg:inline w-5 lg:w-6" />
          <div className="flex items-center w-6 lg:w-10" onClick={logOut}>
            <img
              src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
              alt=""
              className="cursor-pointer rounded"
            />
            <ArrowDropDownIcon className="hidden md:inline" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
