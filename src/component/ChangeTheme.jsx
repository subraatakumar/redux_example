import React from "react";
import { useDispatch, useSelector } from "react-redux";
function ChangeTheme() {
  const dispath = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div>
      <p style={{ color: theme == "light" ? "#000" : "#fff" }}>ChangeTheme</p>
      {theme == "light" ? (
        <button onClick={() => dispath({ type: "dark" })}>dark</button>
      ) : (
        <button onClick={() => dispath({ type: "light" })}>light</button>
      )}
    </div>
  );
}

export default ChangeTheme;
