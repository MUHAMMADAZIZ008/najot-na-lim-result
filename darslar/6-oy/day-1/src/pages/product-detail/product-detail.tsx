import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "./service/query/useGetSingleProduct";

export const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProduct(id as string);
  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <div>
          <img src={data?.img} alt="img" />
          <h1>{data?.title}</h1>
        </div>
      )}
    </div>
  );
};
