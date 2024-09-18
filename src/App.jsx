import Counter from "./component/Counter";
import ChangeTheme from "./component/ChangeTheme";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.theme);
  console.log("theme:", theme);
  return (
    <div style={{ background: theme == "light" ? "#FFF" : "#000" }}>
      <ChangeTheme />
      <h1 style={{ color: theme == "light" ? "#000" : "#fff" }}>
        Redux Example
      </h1>
      <Counter />
    </div>
  );
}

export default App;
