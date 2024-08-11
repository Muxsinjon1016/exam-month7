import React from "react";
import LogOutBtn from "../../components/logOutBtn";
import useRenderAllProducts from "./services/useRenderAllProducts";
import RenderProducts from "./components/renderProducts";
import SearchProducts from "./components/searchProducts";

export const Bag = () => {
  const { data } = useRenderAllProducts();

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
        <div className="bg-white pt-10 pb-20 px-14 min-h-[500px] rounded-12">
          <div className="mb-10">
            <SearchProducts />
          </div>
          <div className="flex flex-wrap gap-12 justify-evenly">
            {data?.map((product) => (
              <RenderProducts key={product.id} {...product} />
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

export default Bag;
