import React from "react";
import { Button } from "../components/ui/button";
import { MdOutlineLogin } from "react-icons/md";
import LogOutModal from "./logOutModal";

export const LogOutBtn = () => {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button
        onClick={handleModal}
        variant={"logOut"}
        children={"Выйти"}
        startIcon={<MdOutlineLogin className="w-[20px] h-auto" />}
      />
      {modal && <LogOutModal closeModal={() => setModal(false)} />}
    </div>
  );
};

export default LogOutBtn;
