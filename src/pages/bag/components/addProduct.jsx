import { Input } from "postcss";
import React from "react";
import ProductForm from "./newProductForm";
import useRenderCategories from "../../home/services/useRenderCategories";
import useAddNewProduct from "../services/useAddNewProduct";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const { data, isLoading } = useRenderCategories();
  const { mutate } = useAddNewProduct();
  const navigate = useNavigate();

  const newProductSubmit = (data) => {
    mutate(data);
    navigate(-1);
  };

  return (
    <>
      <div>
        {!isLoading && (
          <ProductForm
            categoryData={data}
            newProductSubmit={newProductSubmit}
          />
        )}
        .
      </div>
    </>
  );
};

export default AddProduct;
