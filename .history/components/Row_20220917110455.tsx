import Thumbnail from "./Thumbnail";
import { Movie } from "../typing";

import { useRef, useState } from "react";

import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Props {
  genre: string;
  movies: Movie[];
}

function Row({ genre, movies }: Props) {

  // Enable Scrolling
  const rowRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const scroll = (direction: string) => {
    setScrolling(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - 0.5 * clientWidth
          : scrollLeft + 0.5 * clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="text-white text-sm font-semibold md:text-base lg:text-xl">
      <h2 className="group flex space-x-2 items-center mb-3 cursor-pointer">
        <div>{genre}</div>
        <div className="hidden text-[.6rem] md:text-[.7rem] lg:text-xs text-blue-400 items-center group-hover:flex">
          <div>Explore All</div>
          <div>
            <ChevronRightOutlinedIcon />
          </div>
        </div>
      </h2>
      <div className="flex group relative">
        {scrolling ? (
          <ChevronLeftIcon
            className='scrollBtn left-0 rounded-l-sm h-[100%]'
            onClick={() => scroll("left")}
          />
        ) : null}
        <div
          className="flex items-center space-x-3 scrollbar-hide overflow-hidden overflow-x-scroll max-w-[94.6vw]"
          ref={rowRef}
        >
          {movies?.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <div className='absolute right-0 rounded-r-sm h-[100%] flex flex-col items-center m-auto w-12 top-0 bottom-0 cursor-pointer z-50 bg-black/50 hover:bg-black/70'
          onClick={() => scroll("right")}>
        <ChevronRightIcon
        className="my-auto"
        />
        </div>
      </div>
    </div>
  );
}

export default Row;
