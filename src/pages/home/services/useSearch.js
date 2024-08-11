import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useSearch = (value) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: () =>
      request
        .get("/categories", { params: { title_like: value } })
        .then((res) => res.data),
  });
};

export default useSearch;
