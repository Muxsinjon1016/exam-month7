import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useRenderCategories = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: () => request.get("/categories").then((res) => res.data),
  });
};

export default useRenderCategories;
