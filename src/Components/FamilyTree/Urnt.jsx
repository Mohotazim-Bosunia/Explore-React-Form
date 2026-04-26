import React from "react";
import Causin from "./Causin";

const Urnt = ({ asset }) => {
  return (
    <div>
      <h3>Arnt</h3>
      <section className="flex">
        <Causin name="Sumon" asset={asset}></Causin>
        <Causin name="Limon"></Causin>
      </section>
    </div>
  );
};

export default Urnt;
