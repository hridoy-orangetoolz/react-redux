import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCount } from "../actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <>
      <button onClick={() => dispatch(updateCount(count + 1))}>+</button>
      <button onClick={() => dispatch(updateCount(count - 1))}>-</button>
      <div>
        <h1>Value:{count}</h1>
      </div>
    </>
  );
};

export default Counter;
