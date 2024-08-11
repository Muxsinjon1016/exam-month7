import React from "react";
import { Button } from "../../components/ui/button";
import LogOutBtn from "../../components/logOutBtn";
import { useNavigate } from "react-router-dom";

export const Goods = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white fixed top-0 z-10 left-[8%] right-0 py-4 px-12 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold mb-1">Товары</h2>
          <p className="text-gray-300 font-bold">Главная / Товары</p>
        </div>
        <div>
          <LogOutBtn />
        </div>
      </div>
      <div className="container mt-[120px]">
        <div className="bg-white min-h-[500px] rounded-12">
          <div className="flex items-center justify-center gap-32 pt-44">
            <Button
              variant={"add"}
              children={"Create new category"}
              onClick={() => navigate("/new-category-form")}
            />
            <Button
              variant={"add"}
              children={"Add new Product"}
              onClick={() => navigate("/add-new-product")}
            />
          </div>
        </div>
        <p className="font-bold mt-[60px] text-[#80809b] text-right">
          © Anymarket 2022
        </p>
      </div>
    </>
  );
};

export default Goods;
