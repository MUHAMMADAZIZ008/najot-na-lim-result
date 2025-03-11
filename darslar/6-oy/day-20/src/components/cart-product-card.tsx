import { useDispatch } from "react-redux";
import {
  cartProductT,
  deleteProduct,
  toggleAmount,
} from "../store/slices/cart-reducer";

export const CartProductCard = (product: cartProductT) => {
  const dispatch = useDispatch();
  return (
    <div className="border grow p-[20px]">
      <img src={product.img} alt="img" />
      <p className="font-bold">Narhi: {product.price} $</p>
      <p className="font-bold">Jami: {product.userPrice} $</p>
      {product.count > 0 ? (
        <button
          className="p-[10px] bg-green-500 cursor-pointer"
          onClick={() =>
            dispatch(toggleAmount({ id: product.id, type: "add" }))
          }
        >
          +
        </button>
      ) : (
        <button className="bg-red-500 p-[10px] cursor-pointer">
          O'chirish
        </button>
      )}
      <span>{product.userCount}</span>
      {product.userCount > 1 ? (
        <button
          onClick={() =>
            dispatch(toggleAmount({ id: product.id, type: "remove" }))
          }
          className="p-[10px] bg-green-500 cursor-pointer"
        >
          -
        </button>
      ) : (
        <button
          className="bg-red-500 p-[10px] cursor-pointer"
          onClick={() => dispatch(deleteProduct({ id: product.id }))}
        >
          X
        </button>
      )}

      <span>mavjud: {product.count}</span>
    </div>
  );
};
