import { atom } from "recoil"
import { Movie } from "../typing"



export const myListState = atom<Movie[]>({
    key: 'myListState',
    default: []
})