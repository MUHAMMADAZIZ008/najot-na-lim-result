import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/home";
import { ProductDetail } from "./pages/product-detail/product-detail";

function App() {
  return (
    <div>
      <div className="bg-amber-400 p-[30px] flex justify-center gap-[40px]">
        <Link to={"/"}>Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
