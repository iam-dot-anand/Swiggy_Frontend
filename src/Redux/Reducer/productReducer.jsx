export const ProductData = (data = [], action) => {
  switch (action.type) {
    case "SetProductData":
        // console.log("ProductData reducer", action );
        // console.log("Data reducer called", data );
      return [...action.payload];
    default:
      return data;
  }
};
