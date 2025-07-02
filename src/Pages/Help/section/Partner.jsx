import React from "react";
import { PartnerDesc } from "../Description";
import DescData from "./DescData";

export const Partner = (props) => {
  
  // console.log(props);
  return (
    <div className="w-100">
      <h4 className="fw-bold mb-3">Partner Onboarding</h4>
      <div className="d-flex flex-column">
        {PartnerDesc.map((items, index) => {
          return <DescData items={items} index={index}/>
        })}
      </div>
    </div>
  );
};
