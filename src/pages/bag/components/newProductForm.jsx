import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import LogOutBtn from "../../../components/logOutBtn";
import { MdErrorOutline } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(4, "Name must be at least 4 characters"),
  url: z
    .string()
    .url("Invalid URL, plase enter another URL")
    .min(7, "URL must be at least 7 characters"),
  description: z.string().min(5, "Name must be at least 5 characters"),
});

export const ProductForm = ({ newProductSubmit, categoryData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <>
      <div className="bg-white fixed top-0 z-10 left-[8%] right-0 py-4 px-12 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold mb-1">Новый товар</h2>
          <p className="text-gray-300 font-bold">
            Главная / Товары / Новый товар
          </p>
        </div>
        <div>
          <LogOutBtn />
        </div>
      </div>
      <div className="container mb-[130px] mt-[120px]">
        <div className="bg-white pb-[110px] py-[1px] px-14 min-h-[500px] rounded-12">
          <form
            className="mt-32 border rounded-12 py-[40px] px-[50px] border-gray-300"
            onSubmit={handleSubmit(newProductSubmit)}
          >
            <div className="mb-[30px] relative">
              <Input
                label={"Name of Product"}
                register={register}
                className={"w-[60%] mx-auto block"}
                type={"text"}
                name={"title"}
              />
              {errors.title && (
                <p className="text-red-600 font-medium text-lg">
                  {errors.title.message}
                  <MdErrorOutline className="absolute top-12 right-10 w-7 h-auto" />
                </p>
              )}
            </div>
            <div className="flex mb-[30px] justify-between w-full">
              <div>
                <Input
                  label={"Price"}
                  register={register}
                  className={"w-[520px] mr-auto block"}
                  type={"number"}
                  name={"price"}
                />
              </div>
              <div>
                <label className="font-bold text-lg" htmlFor="categoryId">
                  Product category
                </label>
                <select
                  className="rounded-12 bg-eee py-4 w-[520px] px-[17px] outline-none mt-2 font-semibold mx-auto block"
                  {...register("categoryId")}
                >
                  {(categoryData && Array.isArray(categoryData)
                    ? categoryData
                    : []
                  ).map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-[30px] relative">
              <Input
                label={"Image link"}
                register={register}
                className={"w-[60%] mx-auto block"}
                type={"url"}
                name={"url"}
              />
              {errors.url && (
                <p className="text-red-600 font-medium text-lg">
                  {errors.url.message}
                  <MdErrorOutline className="absolute top-12 right-10 w-7 h-auto" />
                </p>
              )}
            </div>
            <div className="relative">
              <Input
                label={"Description"}
                register={register}
                className={
                  "mr-auto block resize-none overflow-y-auto w-[764px] h-[110px]"
                }
                as={"textarea"} // Changed to 'as'
                name={"description"} // Changed from 'url' to 'description'
              />
              {errors.description && (
                <p className="text-red-600 font-medium text-lg">
                  {errors.description.message}
                  <MdErrorOutline className="absolute top-12 right-[350px] w-7 h-auto" />
                </p>
              )}
            </div>
            <div className="w-full fixed bottom-0 left-[8%] right-0 mx-auto bg-white py-[20px]">
              <div className="flex justify-center items-center gap-2">
                <Button
                  children={"Сохранить"}
                  type={"submit"}
                  variant={"add"}
                />
                <Button
                  children={"Выгрузить в маркетплейсы // reset"}
                  type={"reset"}
                  variant={"logOut"}
                />
              </div>
            </div>
          </form>
        </div>
        <p className="font-bold mt-[60px] text-[#80809b] text-right">
          © Anymarket 2022
        </p>
      </div>
    </>
  );
};

export default ProductForm;
