import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center basis-full md:mx-4 lg:mx-7">
        <div className="flex basis-4/5 space-x-8">
          <Link href={'/'}>
          <img
            src="https://rb.gy/ulxxee"
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
            <li className="headerLink">Browse by Languages</li>
          </ul>
        </div>
        <div className="flex justify-end items-center basis-1/5 space-x-5">
          <SearchIcon className="cursor-pointer w-5 lg:w-6" />
          <div className="hidden lg:inline">
            <Link href={"/Kids"}>Kids</Link>
          </div>
          <NotificationsNoneIcon className=" cursor-pointer hidden lg:inline w-5 lg:w-6" />
          <Link href="/account">
            <div className="flex items-center w-6 lg:w-10">
              <img
                src="https://rb.gy/g1pwyx"
                alt=""
                className="cursor-pointer rounded"
              />
              <ArrowDropDownIcon className="hidden md:inline" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
