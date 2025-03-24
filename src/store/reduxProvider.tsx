"use client";

import { ReactNode,useRef } from "react";
import { AppStore,createStore} from "./store";
import { Provider } from 'react-redux'

interface Props {
  children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = createStore()
    }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
