import React from "react";
import Button from "../../../components/ui/button";
import { useRemoveProducts } from "../services/useRemoveProducts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RenderProducts = ({ title, url, description, price, id }) => {
  const { mutate } = useRemoveProducts();
  const navigate = useNavigate();

  const customToastStyle = {
    position: "fixed",
    top: "2%",
    left: "8%",
    right: "5%",
    width: "auto",
    maxWidth: "100%",
    padding: "15px 45px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#e9faf4",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  };

  const deleteProduct = () => {
    mutate(id, {
      onSuccess: () => {
        toast.info(
          "Товар(ы) был успешно удален // Product successfully deleted!",
          {
            style: customToastStyle,
          }
        );
      },
      onError: (error) => {
        toast.error(`Failed to delete the product: ${error.message}`, {
          style: customToastStyle,
        });
      },
    });
  };

  return (
    <>
      <div>
        <div className="bg-gray-200 mx-auto mb-4 w-[200px] rounded-12 border-2 border-gray-200 overflow-hidden">
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
      </div>
    </>
  );
};

export default RenderProducts;
