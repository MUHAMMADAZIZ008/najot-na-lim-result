import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data: { title: string; img: string }) =>
      request.post("/phones", data).then((res) => res.data),
  });
};
useDeleteProduct