import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useSearchProducts = (value) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: () =>
      request
        .get("/products", { params: { title_like: value } })
        .then((res) => res.data),
  });
};

export default useSearchProducts;
