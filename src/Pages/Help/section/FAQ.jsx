import React from 'react'
import {FAQDesc} from "../Description";
import DescData from './DescData';

export const FAQ = () => {
  
    return (
      <div className="w-100">
        <h4 className="fw-bold mb-3">FAQ</h4>
        <div className="d-flex flex-column">
          {FAQDesc.map((items,index) => {
            return <DescData items={items} index={index}/>
          })}
        </div>
      </div>
    );
}
