import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useEditProduct = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) =>
      request.put(`/products/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["getProducts"]);
    },
  });
};

export default useEditProduct;
