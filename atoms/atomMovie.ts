import { atom } from "recoil";
import { Movie } from "../typing";

export const movieState = atom<Movie | null>({
    key: 'movieState',
    default: null
})