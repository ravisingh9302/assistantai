import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import interviewReducer from './slices/interviewSlice'; // Import slices



export const createStore = () => {
  return configureStore({
    reducer: {
      interview: interviewReducer, 



    },
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
  })
}




// Infer the type of makeStore
export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// Typed hooks for useSelector and useDispatch
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
