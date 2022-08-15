import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
  return (
    <header className="bg-gradient-to-b from-neutral-800  items-center h-16 flex text-white">
      <div className="flex items-center mx-16 basis-full">
        <div className="flex basis-2/3 space-x-8">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
          <ul className="flex space-x-4 font-light">
            <li className="font-semibold">Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="flex justify-end items-center basis-1/3 space-x-5">
          <SearchIcon className="w-6 h-6" />
          <Link href={"/Kids"}>Kids</Link>
          <NotificationsNoneIcon className="w-6 h-6" />
          <Link href="/account">
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
