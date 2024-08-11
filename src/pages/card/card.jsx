import React from "react";
import { Button } from "../../components/ui/button";
import { MdOutlineLogin } from "react-icons/md";
import LogOutBtn from "../../components/logOutBtn";

export const Card = () => {
  return (
    <>
      <div className="bg-white fixed top-0 z-10 left-[8%] right-0 py-4 px-12 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold mb-1">Платить</h2>
          <p className="text-gray-300 font-bold">Главная / Платить</p>
        </div>
        <div>
          <LogOutBtn />
        </div>
      </div>
      <div className="container mt-[120px]">
        <div className="bg-white min-h-[500px] rounded-12"></div>
        <p className="font-bold mt-[60px] text-[#80809b] text-right">
          © Anymarket 2022
        </p>
      </div>
    </>
  );
};

export default Card;
