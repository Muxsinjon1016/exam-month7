import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCategory } from "../services/useEditCategory";
import { MdErrorOutline } from "react-icons/md";

const schema = z.object({
  title: z.string().min(4, "Name must be at least 4 characters"),
  categoryImg: z
    .string()
    .url("Invalid URL, please enter another URL")
    .min(7, "URL must be at least 7 characters"),
});

export const EditCategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate } = useEditCategory(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const newCategorySubmit = (data) => {
    mutate(
      { id, ...data },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
    reset();
  };

  return (
    <>
      <div className="bg-white w-[600px] mx-auto mt-32 py-12 rounded-12">
        <form
          className="mt-10 w-[70%] mx-auto"
          onSubmit={handleSubmit(newCategorySubmit)}
        >
          <div className="relative">
            <Input
              register={register}
              className={"mt-5 w-[60%] mx-auto block"}
              type={"text"}
              name={"title"}
              placeholder={"Enter new category name"}
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
              placeholder={"Enter new category image (must be URL!)"}
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
            children={"Edited"}
          />
        </form>
      </div>
    </>
  );
};

export default EditCategoryForm;
