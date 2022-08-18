import Image from "next/image";
import { Movie } from "../typing";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
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
      />
    </div>
  );
}

export default Thumbnail;