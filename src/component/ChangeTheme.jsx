import React from "react";
import { useDispatch, useSelector } from "react-redux";
function ChangeTheme() {
  const dispath = useDispatch();
  const { name, colors } = useSelector((state) => state.theme);
  return (
    <div>
      <p style={{ color: colors.color }}>ChangeTheme</p>
      {name == "light" ? (
        <button onClick={() => dispath({ type: "dark" })}>dark</button>
      ) : (
        <button onClick={() => dispath({ type: "light" })}>light</button>
      )}
    </div>
  );
}

export default ChangeTheme;
