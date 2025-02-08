"use client";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
//
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();

    // to initialize value from server or localstorage means persistence data.
    // storeRef.current.dispatch({counter : 0})
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
