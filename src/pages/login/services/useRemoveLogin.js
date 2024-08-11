import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useRemoveLogin = () => {
  return useMutation({
    mutationFn: () => request.delete("/users").then((res) => res.data),
  });
};

export default useRemoveLogin;
