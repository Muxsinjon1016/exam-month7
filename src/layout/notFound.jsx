import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 bg-white">
      <div className="text-7xl font-bold text-center mt-14">Not found</div>
      <img className="mx-auto mt-4" src="/empty.png" alt="img" />
      <button
        onClick={() => navigate("/")}
        className="mt-8 mx-auto block py-4 px-7 rounded-12 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-semibold"
      >
        To Home
      </button>
    </div>
  );
};

export default NotFound;
