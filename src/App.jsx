import Counter from "./component/Counter";
import ChangeTheme from "./component/ChangeTheme";
import { useSelector } from "react-redux";
function App() {
  const {
    colors: { backgroundColor, color },
  } = useSelector((state) => state.theme);

  return (
    <div style={{ background: backgroundColor }}>
      <ChangeTheme />
      <h1 style={{ color: color }}>Redux Example</h1>
      <Counter />
    </div>
  );
}

export default App;
