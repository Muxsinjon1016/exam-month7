import React from "react";
import { EditPoductForm } from "./editProductForm";
import useRenderCategories from "../../home/services/useRenderCategories";
import { useEditProduct } from "../services/useEditProduct";
import { useNavigate, useParams } from "react-router-dom";

export const EditProduct = () => {
  const { id } = useParams();
  const { data: categories, isLoading } = useRenderCategories();
  const { mutate } = useEditProduct();
  const navigate = useNavigate();

  const editedProductSubmit = (data) => {
    mutate(
      { id, data },
      {
        onSuccess: () => {
          navigate(-1);
        },
      }
    );
  };

  return (
    <div>
      {!isLoading && (
        <EditPoductForm
          categoryData={categories}
          editedProductSubmit={editedProductSubmit}
        />
      )}
    </div>
  );
};

export default EditProduct;
