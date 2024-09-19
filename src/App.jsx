import Counter from "./component/Counter";
import ChangeTheme from "./component/ChangeTheme";
import { useSelector } from "react-redux";
import AllProducts from "./component/AllProducts";
function App() {
  const {
    colors: { backgroundColor, color },
  } = useSelector((state) => state.theme);

  return (
    <div style={{ background: backgroundColor }}>
      <ChangeTheme />
      <h1 style={{ color: color }}>Redux Example</h1>
      <Counter />
      <AllProducts />
    </div>
  );
}

export default App;
