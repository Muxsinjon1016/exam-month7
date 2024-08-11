import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNewCategory } from "../services/useNewCategory";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

const schema = z.object({
  title: z.string().min(4, "Name must be at least 4 characters"),
  categoryImg: z
    .string()
    .url("Invalid URL, please enter another URL")
    .min(7, "URL must be at least 7 characters"),
});

export const NewCategoryForm = () => {
  const navigate = useNavigate();
  const { mutate } = useNewCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const newCategorySubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
    reset();
  };

  return (
    <>
      <div className="bg-white w-[70%] mx-auto py-8 rounded-12 mt-20">
        <form
          className="mt-32 w-[70%] mx-auto pb-20"
          onSubmit={handleSubmit(newCategorySubmit)}
        >
          <div className="relative">
            <Input
              register={register}
              className={"mt-5 w-[60%] mx-auto block"}
              type={"text"}
              name={"title"}
              placeholder={"Category name"}
            />
            {errors.title && (
              <p className="text-red-600 font-medium text-lg">
                {errors.title.message}
                <MdErrorOutline className="absolute top-4 right-7 w-7 h-auto" />
              </p>
            )}
          </div>
          <div className="relative">
            <Input
              register={register}
              className={"mt-5 w-[60%] mx-auto block"}
              type={"url"}
              name={"categoryImg"}
              placeholder={"Category image (must be url!)"}
            />
            {errors.categoryImg && (
              <p className="text-red-600 font-medium text-lg">
                {errors.categoryImg.message}
                <MdErrorOutline className="absolute top-4 right-7 w-7 h-auto" />
              </p>
            )}
          </div>
          <Button
            className={"mt-10 block w-[35%]"}
            type={"submit"}
            variant={"submit"}
            children={"Send"}
          />
        </form>
      </div>
    </>
  );
};

export default NewCategoryForm;
