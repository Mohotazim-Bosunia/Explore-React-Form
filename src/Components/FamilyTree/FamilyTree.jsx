import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssestConText = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const asset = "Diamond";
  const newAsset = "Gold";
  const [money, setMoney] = useState(0);
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Money:{money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssestConText.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssestConText.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
