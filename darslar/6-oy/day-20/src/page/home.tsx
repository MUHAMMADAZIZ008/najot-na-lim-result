import { Link } from "react-router-dom";
import { ProductCard } from "../components/product-card";
import data from "../data/data";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Home = () => {
  const { productCount } = useSelector((state: RootState) => state.product);
  return (
    <div className="container">
      <Link to={"/cart"}>CART {productCount}</Link>

      <div className="flex">
        {data.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
