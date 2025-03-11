import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { productT } from "../../../../components/product-card";

export const useGetSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["single_product", id],
    queryFn: () =>
      request.get<productT>(`/phones/${id}`).then((res) => res.data),
  });
};
