import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryProducts } from "../services/useCategoryProducts";
import { CategoryRenderProducts } from "./categoryRenderProducts";
import { Button } from "../../../components/ui/button";
import LogOutBtn from "../../../components/logOutBtn";
import PlusIcon from "../../../../public/plusIcon";
import Empty from "../../../components/empty";

export const CategoryProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useCategoryProducts(id);

  return (
    <>
      <div className="bg-white fixed top-0 z-10 left-[8%] right-0 py-4 px-12 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold mb-1">Cумка</h2>
          <p className="text-gray-300 font-bold">Главная / Cумка</p>
        </div>
        <div>
          <LogOutBtn />
        </div>
      </div>
      <div className="container mt-[120px]">
        <div className="bg-white pt-6 pb-20 px-14 min-h-[500px] rounded-12">
          <div className="flex flex-wrap gap-5 justify-evenly">
            {data?.length > 0 ? (
              data.map((product) => (
                <CategoryRenderProducts key={product.id} {...product} />
              ))
            ) : (
              <>
                <Empty />
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => navigate("/add-new-product")}
            className={"mt-4"}
            variant={"add"}
            children={"Новый товар"}
            startIcon={<PlusIcon />}
          />
          <p className="font-bold mt-[60px] text-[#80809b] text-right">
            © Anymarket 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
