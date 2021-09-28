import { TypedUseSelectorHook, useSelector } from "react-redux";
import { JokeState } from "../types/joke";

export const useTypedSelector: TypedUseSelectorHook<JokeState> = useSelector