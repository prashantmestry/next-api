"use client";
import React, { useReducer } from "react";

// Define the state type
interface CounterState {
  count: number;
}

// Define the action types
type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

// Reducer function
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state; // This should never be hit because of the strict action types
  }
};

// Define initial state
const initialState: CounterState = { count: 0 };

const Shopping: React.FC = () => {
  // Use useReducer with typed state and action
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Shopping;
