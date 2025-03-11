import { Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import { Cart } from "./page/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
