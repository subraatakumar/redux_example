import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
function ChangeTheme() {
  const dispath = useDispatch();
  const { name, colors } = useSelector((state) => state.theme);
  return (
    <div>
      <p style={{ color: colors.color }}>ChangeTheme</p>
      {name == "light" ? (
        <button onClick={() => dispath({ type: actionTypes.DARK })}>
          dark
        </button>
      ) : (
        <button onClick={() => dispath({ type: actionTypes.LIGHT })}>
          light
        </button>
      )}
    </div>
  );
}

export default ChangeTheme;
