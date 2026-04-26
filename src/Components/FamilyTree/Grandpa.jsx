import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Urnt from "./Urnt";

const Grandpa = ({ asset }) => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Urnt asset={asset}></Urnt>
      </section>
    </div>
  );
};

export default Grandpa;
