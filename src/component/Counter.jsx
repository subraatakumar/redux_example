import React from "react";
import { useSelector, useDispatch } from "react-redux";
import increase from "../redux/actions/increase";

function Counter() {
  const count = useSelector((state) => state.counter);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 style={{ color: theme == "light" ? "#000" : "#fff" }}>
        Counter: {count}
      </h3>
      <button onClick={() => dispatch(increase())}>increase</button>
    </div>
  );
}

export default Counter;
