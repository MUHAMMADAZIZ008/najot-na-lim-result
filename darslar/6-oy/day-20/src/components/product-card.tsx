import { productT } from "../store/slices/cart-reducer";
import { useDispatch } from "react-redux";
import { addPoductList } from "../store/slices/cart-reducer";

export const ProductCard = (product: productT) => {
  const dispatch = useDispatch();

  const addTocart = () => {
    dispatch(addPoductList(product))
  }
  return (
    <div className="border p-[20px]">
      <img src={product.img} alt="img" />
      <h2>{product.name}</h2>
      <p className="font-bold">{product.price} $</p>
      <p>{product.count}</p>
      <button onClick={addTocart} className="bg-amber-400 cursor-pointer">Add</button>
    </div>
  );
};
