import Thumbnail from "./Thumbnail";
import { Movie } from "../typing";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef, useState } from "react";

interface Props {
  genre: string;
  movies: Movie[];
}

function Row({ genre, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const clickHandler = (direction: string) => {
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
      <h2 className="flex space-x-2 items-center mb-3">
        <div>{genre}</div>
        <div className="hidden text-xs items-center">
          <div>Explore All</div>
          <div>
            <ChevronRightOutlinedIcon />
          </div>
        </div>
      </h2>
      <div className="flex group relative">
        {scrolling ? (
          <ChevronLeftIcon
            className={`scrollBtn left-0`}
            onClick={() => clickHandler("left")}
          />
        ) : null}
        <div
          className="flex items-center space-x-2 scrollbar-hide overflow-hidden overflow-x-scroll max-w-[94vw]"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className={`scrollBtn right-0`}
          onClick={() => clickHandler("right")}
        />
      </div>
    </div>
  );
}

export default Row;
