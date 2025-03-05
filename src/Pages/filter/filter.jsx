import React from "react";
import "./filter.css"
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

export default  function Filter() {
  const filterList=[
    {
      filterName:"Filter",  
      icon:<CiFilter />
    },
    {
      filterName:"SortBy",
      icon:<IoIosArrowDown />
    },
    {
      filterName:"Fast Delivery"
    },
    {
      filterName:"New on Swiggy"
    },
    {
      filterName:"Rating 4.0+"
    },
    {
      filterName:"Pure Veg"
    },
    {
      filterName:"Offer"
    },
    {
      filterName:"Rs.300-Rs.600"
    },
    {
      filterName:"Less then Rs.300"
    },
  ]
  return (
    <div>
      <div className="container p-0 m-0">
        {/* <div className="fw-bold fs-4">Restaurants with online food delivery in Lucknow</div> */}
        <div className="filter d-flex gap-2 my-3">
          {
            filterList.map((data, index)=>{
              return(
                <div key={index} className="fw-medium border border-muted rounded-5 px-3 py-2" style={{cursor:"pointer"}}>
                  {data.filterName} {data.icon}
                </div>
              )
            })
          }
        </div>
       
      </div>
    </div>
  );
};
