import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { request } from "../../config/request";
import { saveState } from "../../config/storage";
import { useLogin } from "./services/useLogin";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(4, "Email must be at least 4 characters"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(8, "Password must be a maximum of 8 characters"),
});

export const Login = () => {
  const [password, setPassword] = React.useState(false);
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const loginSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/", { replace: true });
      },
    });

    reset();
  };

  const showPassword = () => {
    setPassword(!password);
  };

  return (
    <div className="relative bg-eee h-screen">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className=" w-[460px] h-[360px] mt-32 border-2 bg-white py-6 px-8 rounded-12">
          <form onSubmit={handleSubmit(loginSubmit)} className="mt-7">
            <Input
              variant={"default"}
              register={register}
              className={"mt-4"}
              type={"email"}
              name={"email"}
              placeholder={"Email"}
            />
            {errors.email && (
              <p className="text-red-600 font-medium text-lg">
                {errors.email.message}
              </p>
            )}
            <div className="flex mt-4 relative items-center gap-0 rounded-12 bg-eee">
              <Input
                variant={"default"}
                className={"scroll-pt-2 pt-[8px]"}
                register={register}
                type={password ? "text" : "password"}
                name={"password"}
                placeholder={"Password"}
              />
              {password ? (
                <IoMdEyeOff
                  onClick={showPassword}
                  className="w-7 h-auto absolute right-0 mr-2 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={showPassword}
                  className="w-7 absolute right-0 h-auto mr-2 cursor-pointer"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-600 font-medium text-lg">
                {errors.password.message}
              </p>
            )}
            <Button
              className={"mt-7"}
              type={"submit"}
              variant={"submit"}
              children={"Send"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
