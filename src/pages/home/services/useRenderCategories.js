import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useRenderCategories = (page = 1) => {
  return useQuery({
    queryKey: ["getCategories", page],
    queryFn: () =>
      request
        .get("/categories", {
          params: {
            _page: page,
            _limit: 3,
          },
        })
        .then((res) => {
          return {
            data: res.data,
            pageSize: Math.ceil(
              parseInt(res.headers.get("X-Total-Count"), 10) / 3
            ),
          };
        }),
  });
};

export default useRenderCategories;
