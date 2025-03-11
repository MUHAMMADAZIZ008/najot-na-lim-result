import { ProductCard } from "../../components/product-card";
import { Form } from "./components/form";
import { useGetProducts } from "./service/query/useGetProducts";

export const Home = () => {
  const { data, isLoading } = useGetProducts();

  return (
    <div>
      <div className="container">
        <Form />
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="grid grid-cols-4">
            {data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
