import React from "react";
import Button from "./ui/button";
import { useRemoveLogin } from "../pages/login/services/useRemoveLogin";
import { useNavigate } from "react-router-dom";
import { loadState } from "../config/storage";

export const LogOutModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const { mutate: logOut } = useRemoveLogin();

  const handleLogOut = () => {
    loadState("user");
    localStorage.removeItem("user");
    logOut(null, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };

  return (
    <div
      onClick={closeModal}
      className="backdrop-blur-sm absolute top-0 left-0 right-0 min-h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border-4 border-gray-400 py-4 px-7 text-center rounded-12 w-[300px] mx-auto mt-40"
      >
        <h2 className="text-red-600 font-bold text-3xl mb-10">
          Do you want to log out?
        </h2>
        <div className="flex items-center justify-evenly">
          <Button onClick={closeModal} variant={"edit"} children={"No"} />
          <Button onClick={handleLogOut} variant={"delete"} children={"Yes"} />
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
