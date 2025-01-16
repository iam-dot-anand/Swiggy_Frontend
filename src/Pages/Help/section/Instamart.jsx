import React from "react";
import { InstamartDesc } from "../Description";
import DescData from "./DescData";

export const Instamart = () => {
  return (
    <div className="w-100">
      <h4 className="fw-bold mb-3">Instamart Onboarding</h4>
      <div className="d-flex flex-column">
        {InstamartDesc.map((items,index) => {
          return <DescData items={items} index={index}/>
        })}
      </div>
    </div>
  );
};
