import React from "react";
import Button from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Empty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <p className="text-xl font-extrabold mb-[44px]">
          Вы пока не создали ни одного товара
        </p>
        <img className="block mx-auto mb-8" src="/empty.png" alt="img" />
        <Button
          onClick={() => navigate("/add-new-product")}
          className={"mx-auto"}
          variant={"add"}
          children={"Создать первый товар"}
        />
      </div>
    </>
  );
};

export default Empty;
