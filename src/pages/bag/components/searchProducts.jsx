import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { useDebounce } from "../../../hooks/useDebounce";
import { useSearchProducts } from "../services/useSearchProducts";
import { RenderProducts } from "./renderProducts";

export const SearchProducts = ({ register }) => {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue);
  const { data } = useSearchProducts(debouncedValue);

  return (
    <div className="flex relative items-center mr-14 gap-0 px-5 ml-auto rounded-12 bg-eee transition-all duration-500">
      <IoSearchSharp className="text-gray-500 w-7 h-auto" />
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Поиск"
        className="w-[1070px]"
        name="name"
        register={register}
      />
      {inputValue.length >= 3 && (
        <div className="absolute w-full bg-blue-300 p-5 top-[70px] rounded-12 right-0">
          {data?.map((category) => (
            <RenderProducts key={category.id} {...category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
