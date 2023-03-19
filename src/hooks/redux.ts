import {TypedUseSelectorHook, useSelector as useAppSelector} from "react-redux";
import {RootState} from "../store";

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;