import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartProductCard } from "../components/cart-product-card";

export const Cart = () => {
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.product
  );
  return (
    <div className="container flex">
      {products.map((item) => (
        <CartProductCard key={item.id} {...item} />
      ))}
      <h1 className="font-bold text-4xl text-amber-700">{totalPrice} $</h1>
    </div>
  );
};
