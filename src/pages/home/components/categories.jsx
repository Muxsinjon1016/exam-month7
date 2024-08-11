import React from "react";
import Button from "../../../components/ui/button";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useRemoveCategory } from "../services/useRemoveCategory";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Categories = ({ categoryImg, title, id }) => {
  const { mutate } = useRemoveCategory();
  const navigate = useNavigate();

  const deleteCategory = () => {
    mutate(id);
  };

  const editCategory = () => {
    navigate(`/edit-category-form/${id}`);
  };

  return (
    <div className="py-4 px-12 categoryCard">
      <div className="border-b-2 pb-4 flex justify-between items-center">
        <div className="w-[75%] flex items-center justify-between">
          <img className="w-[75px]" src={categoryImg} alt="img" />
          <Link
            to={`/category-products/${id}`}
            className="font-bold categoryCardTitle text-xl py-2 px-4 bg-transparent rounded-12 hover:bg-eee border-2 border-transparent hover:border-gray-400 transition-all duration-500"
          >
            {title}
          </Link>
          <p>{id}</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={editCategory}
            className={"bg-[#f7f7ff] p-3 rounded-6"}
            startIcon={<FiEdit className="w-[22px] text-[#5f5fcf] h-auto" />}
          />
          <Button
            onClick={deleteCategory}
            className={"bg-[#f7f7ff] p-3 rounded-6"}
            startIcon={<MdDelete className="w-[22px] text-[#5f5fcf] h-auto" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
