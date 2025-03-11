import { Link } from "react-router-dom";
import { useDeleteProduct } from "../pages/home/service/mutation/useDeleteProduct";
import { useQueryClient } from "@tanstack/react-query";

export interface productT {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

export const ProductCard = ({ img, title, id }: productT) => {
  const { mutate, isPending } = useDeleteProduct();
  const client = useQueryClient();
  const deleteItem = () => {
    mutate(id, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["product_list"] });
      },
    });
  };
  return (
    <div>
      <img src={img} alt="img" />
      <Link to={`/product-detail/${id}`}>
        <h1>{title}</h1>
      </Link>
      <button onClick={deleteItem} className="bg-red-400 p-[5px]">
        {isPending ? "loading..." : "delete"}
      </button>
    </div>
  );
};
