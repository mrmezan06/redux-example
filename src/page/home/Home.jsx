import React from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../reducer/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>
        Counter: <span>{count}</span>K
      </h1>
      <button className="inc" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button
        className="inc"
        onClick={() => dispatch(incrementByAmount({ amount: 20 }))}
      >
        Stack 20
      </button>
      <button className="dec" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="dec" onClick={() => navigate("/greet")}>
        Greeting Route
      </button>
    </>
  );
};

export default Home;
