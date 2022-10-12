import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { greetByAmount } from "../../reducer/greetingSlice";

const Greeting = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const greets = useSelector((state) => state.greeting.data);
  useEffect(() => {
    console.log(count);
    dispatch(greetByAmount({ greet: count }));
  }, [count, dispatch]);
  return (
    <div>
      <h1 className="greet">{greets}K</h1>
      <button
        onClick={() => {
          dispatch(greetByAmount({ greet: count }));
        }}
      >
        Greet
      </button>
    </div>
  );
};

export default Greeting;
