import { useEffect, useState } from "react";
import { Movie } from "../typing";
import Image from "next/image";
import baseUrl from "../utils/baseUrl";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(movie);

  return (
    <div>
      <div className="flex-col space-y-6 absolute top-40 left-5 text-white z-50 w-[50vw] md:left-8 md:top-60 lg:left-16 lg:w-[40vw] ">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
          {movie?.original_name ||
            movie?.title ||
            movie?.name ||
            movie?.original_title}
        </h1>
        <p className="text-xs md:text-sm lg:text-lg">{movie?.overview}</p>
        <div className="sm:flex text-center text-xs space-y-3  sm:space-y-0 sm:space-x-3 md:text-sm lg:text-lg">
          <button className="flex items-center gap-x-1 px-5 py-2 rounded bg-white text-black w-24 text-bold">
            <PlayArrowIcon className="w-5" />
            Play
          </button>
          <button className="flex items-center gap-x-1 px-5 py-2 rounded bg-[rgba(110,111,108,255)]/70 text-bold">
            <InfoOutlinedIcon className="w-5" />
            More Info
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[105vh] w-[98.9vw]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
