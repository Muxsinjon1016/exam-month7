import React from "react";
import { useRenderCategories } from "./services/useRenderCategories";
import { Categories } from "./components/categories";
import { LogOutBtn } from "../../components/logOutBtn";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search } from "./components/search";

export const Home = () => {
  const [page, setPage] = React.useState(1);

  const { data } = useRenderCategories(page);
  const { register } = useForm();
  const navigate = useNavigate();
  const pageSize = Array(
    Number(data?.pageSize) ? Number(data?.pageSize) : 0
  ).fill(null);

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
            <Search />
          </div>
          <div>
            <div className="flex items-center mb-4 justify-between w-[75%] ml-12">
              <p className="text-b5b5c3 font-extrabold">Category image</p>
              <p className="text-b5b5c3 font-extrabold">Category name</p>
              <p className="text-b5b5c3 font-extrabold">Category id</p>
            </div>
            {data?.data?.map((item) => (
              <Categories key={item.id} {...item} />
            ))}
            <div className="flex justify-end mr-10 mt-2 items-center gap-4">
              {pageSize?.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={index + 1 === page ? "bg-blue-600 text-white" : ""}
                  children={index + 1}
                  variant={"page"}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="font-bold mt-[20px] text-[#80809b] text-right">
          © Anymarket 2022
        </p>
      </div>
    </>
  );
};

export default Home;
