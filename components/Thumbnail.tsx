import { Movie } from "../typing";
import { modalState } from "../atoms/atomModal";
import { movieState } from "../atoms/atomMovie";
import Image from "next/image";

import { DocumentData } from "firebase/firestore";
import { useRecoilState } from "recoil";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState<Movie | null>(movieState)
  const onShowModalHandler = function() {
    setShowModal(true);
    setCurrentMovie(movie);
  }
  return (
    <div className="relative h-16 min-w-[120px] sm:h-28 sm:min-w-[180px] cursor-pointer transition duration-200 ease-out middle:h-36 middle:min-w-[260px] md:hover:scale-105">
      <h5 className="absolute top-16 z-40 left-3 w-45 text-white/60">
        {movie?.original_name ||
          movie?.title ||
          movie?.name ||
          movie?.original_title}
      </h5>

      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        className="rounded-sm object-cover"
        onClick={() => onShowModalHandler()}
      />
    </div>
  );
}

export default Thumbnail;
