import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id: number) =>
      request.delete(`/phones/${id}`).then((res) => res.data),
  });
};
