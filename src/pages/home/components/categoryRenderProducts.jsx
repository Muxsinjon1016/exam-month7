import React from "react";
import Button from "../../../components/ui/button";
import { useRemoveProducts } from "../../bag/services/useRemoveProducts";
import { useNavigate } from "react-router-dom";

export const CategoryRenderProducts = ({
  title,
  url,
  description,
  price,
  id,
  categoryId,
}) => {
  const { mutate } = useRemoveProducts();
  const navigate = useNavigate();

  const deleteProduct = () => {
    mutate(id);
  };

  return (
    <>
      <div className="bg-gray-200 w-[200px] rounded-12 border-2 border-gray-200 overflow-hidden">
        <div className="bg-white rounded-12 overflow-hidden">
          <img
            className="block mx-auto w-[150px] h-[150px]"
            src={url}
            alt="img"
          />
        </div>
        <div className="py-5 px-3">
          <h3 className="text-xl font-bold truncate">{title}</h3>
          <p className="text-lg mt-2 mb-2 truncate">{description}</p>
          <p className="text-base ml-4 text-blue-600 font-bold">{price}</p>
          <div className="flex items-center justify-evenly mt-4">
            <Button
              onClick={deleteProduct}
              className={"text-xs px-3"}
              children={"Delete"}
              variant={"delete"}
            />
            <Button
              onClick={() => navigate(`/edit-product/${id}`)}
              className={"text-xs px-3"}
              children={"Edit"}
              variant={"edit"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryRenderProducts;
