import {configureStore} from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch } from "react-redux";
import {api} from "./api";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat([
			api.middleware
		])
	}
})

export type AppDispatch = typeof store.dispatch
export const useDispatch: () => AppDispatch = useAppDispatch
export type RootState = ReturnType<typeof store.getState>
