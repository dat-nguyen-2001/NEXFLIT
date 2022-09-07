import { useEffect, useState } from "react";
import { Movie } from "../typing";
import baseUrl from "../utils/baseUrl";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/atomModal";
import { movieState } from "../atoms/atomMovie";
import { DocumentData } from "firebase/firestore";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {

  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[3]
    );
  }, []);

  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState<Movie | DocumentData | null>(movieState)

  return (
    <div>
      <div className="relative 2xl:top-[-50px]  w-[98.9vw]">
        <img src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
      </div>
      <div className="hidden sm:flex flex-col space-y-[2vw] absolute top-[10vw] left-5 text-white z-40 w-[50vw] md:left-8 lg:left-16 lg:w-[40vw] ">
        <h1 className="text-[5vw] font-bold lg:text-[4vw]">
          {movie?.original_name ||
            movie?.title ||
            movie?.name ||
            movie?.original_title}
        </h1>
        <p className="text-[1.4vw] ">{movie?.overview.substr(0, 180)}</p>
        <div className="flex items-center text-[2vw] space-x-3  sm:space-y-0 sm:space-x-3 md:text-xl">
          <button className="bannerBtn bg-white text-black">
            <PlayArrowIcon className="w-5" />
            <p className="md:h-[32px]">Play</p>
          </button>
          <button className="bannerBtn  bg-[rgba(110,111,108,255)]">
            <InfoOutlinedIcon className="w-5" />
            <p className="md:h-[32px]" onClick={() => {setShowModal(true); setCurrentMovie(movie)}}>More Info</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
