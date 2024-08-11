import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useRenderAllProducts = () => {
  return useQuery({
    queryKey: ["getProducts"],
    queryFn: () => request.get("/products").then((res) => res.data),
  });
};

export default useRenderAllProducts;
