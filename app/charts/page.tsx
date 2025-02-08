"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { incrementCounter } from "@/store/reducers/chartReducer";
//
const Charts = () => {
  const { counter } = useAppSelector((state) => state.chart);
  const dispatch = useAppDispatch();
  //
  return (
    <div>
      Charts {counter}
      <div>
        <button
          className="border px-4"
          onClick={() => dispatch(incrementCounter(""))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Charts;
