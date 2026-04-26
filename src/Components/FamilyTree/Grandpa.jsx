import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Urnt from "./Urnt";

const Grandpa = () => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Urnt></Urnt>
      </section>
    </div>
  );
};

export default Grandpa;
