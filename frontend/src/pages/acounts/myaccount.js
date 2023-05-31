import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Registrado } from "./Registrado";
import { Noregistrado } from "./Noregistrado";

const MyAccount = () => {
  const { isLoggedIn } = useContext(AuthContext);
  let elementoA;

  if (isLoggedIn) {
    elementoA = <Registrado />;
  } else {
    elementoA = <Noregistrado />;
  }

  return (
    <div>
      {elementoA}
    </div>
  );
};

export default MyAccount;
