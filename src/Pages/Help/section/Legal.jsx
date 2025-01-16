import React from "react";
import { LegalDesc } from "../Description";
import DescData from "./DescData";

export const Legal = () => {
  return (
    <div className="w-100">
      <h4 className="fw-bold mb-3">Legal</h4>
      <div className="d-flex flex-column">
        {LegalDesc.map((items,index) => {
          return <DescData items={items} index={index}/>
        })}
      </div>
    </div>
  );
};
