import React from "react";

const NearMe = (props) => {
  // console.log("NearData");
  console.log();
  return (
    <div>
      <div className="fw-bold fs-4 mb-4">Best Places to Eat Across Cities</div>
      <div class="text-center mb-5">
        <div class="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
          {props.neardata.map((item, index) => {
            return (
              <div class="col mt-3">
                <div
                  class="py-3 border border-2 rounded-4 fw-semibold"
                  key={index}
                >
                  Best Restaurant in {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fw-bold fs-4 mb-4">Best Cuisines Near Me</div>
      <div class="text-center mb-5">
        <div class="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
          {props.nearCuisines.map((item, index) => {
            return (
              <div class="col mt-3">
                <div
                  class="py-3 border border-2 rounded-4 fw-semibold"
                  key={index}
                >
                  {item} Restaurant Near Me
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="fw-bold fs-4 mb-4">Explore Every Restaurants Near Me</div>
      <div class="text-center mb-5">
        <div class="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
          <div class="col mt-3">
            <div class="py-3 border border-2 rounded-4 fw-semibold">
              Explore Restaurant Near Me
            </div>
          </div>
          <div class="col mt-3">
            <div class="py-3 px-4 border border-2 rounded-4 fw-semibold">
              Explore Top Rated Restaurant Near Me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NearMe;
