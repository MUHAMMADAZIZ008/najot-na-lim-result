import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
import { productT } from "../../../../components/product-card"

export const useGetProducts = () => {
  return useQuery({
    queryKey:['product_list'],
    queryFn: () => request.get<productT[]>("/phones").then((res) => res.data)
  })
}
