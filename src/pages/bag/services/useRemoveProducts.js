import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useRemoveProducts = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (id) =>
      request.delete(`/products/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getProducts"]);
    },
  });
};

export default useRemoveProducts;
