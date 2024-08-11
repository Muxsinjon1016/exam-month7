import React from "react";
import { useRenderCategories } from "./services/useRenderCategories";
import { Categories } from "./components/categories";
import { LogOutBtn } from "../../components/logOutBtn";
import Input from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import Button from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { data } = useRenderCategories();
  const { register } = useForm();
  const [focused, setFocused] = React.useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white fixed top-0 z-10 left-[8%] right-0 py-4 px-12 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold mb-1">Основной</h2>
          <p className="text-gray-300 font-bold">Главная / Основной</p>
        </div>
        <div>
          <LogOutBtn />
        </div>
      </div>
      <div className="container mt-[120px]">
        <div className="bg-white py-7 min-h-[500px] rounded-12">
          <div className="flex mb-5 items-center justify-between">
            <Button
              onClick={() => navigate("/new-category-form")}
              className={"ml-12"}
              variant={"show"}
              children={"Create Category"}
            />
            <div
              className={`flex items-center mr-14 gap-0 px-5 ml-auto rounded-12 bg-eee transition-all duration-500 ${
                focused ? "w-[70%]" : "w-[20%]"
              }`}
              onClick={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            >
              <IoSearchSharp className="text-gray-500 w-7 h-auto" />
              <Input placeholder={"Поиск"} name="name" register={register} />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4 justify-between w-[75%] ml-12">
              <p className="text-b5b5c3 font-extrabold">Category image</p>
              <p className="text-b5b5c3 font-extrabold">Category name</p>
              <p className="text-b5b5c3 font-extrabold">Category id</p>
            </div>
            {data?.map((item) => (
              <Categories key={item.id} {...item} />
            ))}
          </div>
        </div>
        <p className="font-bold mt-[60px] text-[#80809b] text-right">
          © Anymarket 2022
        </p>
      </div>
    </>
  );
};

export default Home;
