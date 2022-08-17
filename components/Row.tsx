import Thumbnail from "./Thumbnail";
import { Movie } from "../typing";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Props {
  genre: string;
  movies: Movie[];
}

function Row({ genre, movies }: Props) {
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
      <div className="flex">
        <ChevronLeftIcon className="hidden"/>
        <div className="flex items-center space-x-1 scrollbar-hide overflow-hidden overflow-x-scroll w-[94.6vw]">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon className="hidden"/>
      </div>
    </div>
  );
}

export default Row;
