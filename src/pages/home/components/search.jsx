import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { useDebounce } from "../../../hooks/useDebounce";
import { useSearch } from "../services/useSearch";
import { Categories } from "./categories";

export const Search = ({ register }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [focused, setFocused] = useState(false);
  const debouncedValue = useDebounce(inputValue);
  const { data } = useSearch(debouncedValue);

  return (
    <div
      className={`flex relative items-center mr-14 gap-0 px-5 ml-auto rounded-12 bg-eee transition-all duration-500 ${
        focused ? "w-[70%]" : "w-[20%]"
      }`}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <IoSearchSharp className="text-gray-500 w-7 h-auto" />
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Поиск"
        name="name"
        register={register}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {inputValue.length >= 3 && (
        <div className="absolute w-full  bg-blue-300 p-5 top-[70px] rounded-12 right-0">
          {data?.map((category) => (
            <Categories key={category.id} {...category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
