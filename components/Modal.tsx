import { useRecoilState } from "recoil"
import { modalState } from "../atoms/atomModal"
import { Genre, Language, Movie } from "../typing";
import { movieState } from "../atoms/atomMovie";
import { DocumentData } from "firebase/firestore";
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DoneIcon from '@mui/icons-material/Done';


function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [movie, setMovie] = useRecoilState<Movie | DocumentData | null>(movieState);
    const [trailer, setTrailer] = useState('');
    const [genres, setGenres] = useState<Genre[]>([])
    const [overview, setOverview] = useState('');
    const [releasedDate, setReleasedDate] = useState('');
    const [languages, setLanguages] = useState<Language[]>([])
    useEffect(() => {
        if (!movie) return;

        async function fetchMovie() {
            const data = await fetch(`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
                .then(res => res.json());
            // set the key to append to the Youtube link
            setTrailer(data.videos.results[0].key);

            //set trailer's details
            setGenres(data.genres);
            setOverview(data.overview);
            setReleasedDate(data.release_date);
            setLanguages(data.spoken_languages);
        }
        fetchMovie()
    }, [movie])

    // set properties for the trailer
    const [muted, setMuted] = useState(false);
    const [liked, setLiked] = useState(false);
    const [addedToList, setAddedToList] = useState(false)

    return <>
        <div className="h-screen w-screen fixed top-0 bg-black/60 z-50">
            <div className="relative top-[30px] bg-black/80 h-[90vh] z-50 rounded w-[90vw] left-[4vw] md:w-[70vw] md:left-[14.5vw] lg:w-[60vw] lg:left-[19.8vw] 2xl:w-[50vw] 2xl:left-[24.8vw]">
                <ClearIcon className="z-50 absolute top-5 right-[2%] h-9 w-9 rounded-full text-white bg-black/50 cursor-pointer" onClick={() => setShowModal(false)} />
                <div className="relative pt-[56.25%]">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        volume={1}
                        muted={muted}
                        className="overflow-hidden rounded-t-[4px]"

                    />
                    <div className="flex absolute bottom-[5%] w-[96%] left-[2%] items-center">
                        <div className="flex space-x-3 items-center basis-[94.5%]">
                            <div>
                                <button className="bg-white text-black flex items-center rounded">
                                    <PlayArrowIcon className="w-[5vw] h-[5vw] sm:w-6 sm:h-6 md:w-9 md:h-9" />
                                    <p className="font-bold text-[3vw] sm:text-[20px] mr-3 md:mr-5">Play</p>
                                </button>
                            </div>
                            <div className="iconWrapper">
                                {addedToList ?
                                    <DoneIcon className="w-5 h-5 mx-auto md:w-7 md:h-7" onClick={() => setAddedToList(false)} />
                                    : <AddIcon className="w-5 h-5 mx-auto md:w-7 md:h-7" onClick={() => setAddedToList(true)} />
                                }
                            </div>
                            <div className="iconWrapper">
                                {liked ?
                                    <ThumbUpIcon className="w-5 h-5 mx-auto" onClick={() => setLiked(false)} />
                                    : <ThumbUpOffAltIcon className="w-5 h-5 mx-auto md:w-7 md:h-7" onClick={() => setLiked(true)} />
                                }
                            </div>
                        </div>
                        <div className="iconWrapper basis-[5.5%]">
                            {muted ?
                                <VolumeOffIcon className="w-5 h-5 mx-auto md:w-7 md:h-7" onClick={() => setMuted(false)} />
                                :
                                <VolumeUpIcon className="w-5 h-5 mx-auto md:w-7 md:h-7" onClick={() => setMuted(true)} />
                            }
                        </div>
                    </div>
                </div>
                <div className="w-[96%] ml-[2%] mt-[20px]">
                    <div className="flex space-x-5">
                        <div className="flex-column basis-[70%] space-y-5">
                            <div><span className="text-[gray]">Release Date:</span> <span>{releasedDate}</span></div>
                            <div>{overview}</div>
                        </div>
                        <div className="flex-column basis-[30%] space-y-5">
                            <div><span className="text-[gray]">Genres: </span> <span>{genres.map(genre => genre.name).join(', ')} </span></div>
                            <div><span className="text-[gray]">Languages: </span> <span>{languages.map(language => language.english_name).join(', ')} </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Modal