import React, { useContext } from "react";
import { AssestConText } from "./FamilyTree";

const Special = ({ name, asset }) => {
  const newAsset = useContext(AssestConText);
  return (
    <div>
      <h3>Special</h3>
      <p>Asset:{asset}</p>
      <p>NewAsset:{newAsset}</p>
    </div>
  );
};

export default Special;
