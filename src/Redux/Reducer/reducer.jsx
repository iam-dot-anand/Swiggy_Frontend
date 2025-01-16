export const cartData = (data = [], action) => {
  // console.log("add cuisine reducer",action)
  switch (action.type) {
    case "AddToCart":
      // console.log("reducer called", action);
      return [...data,action.data];
    case "RemoveToCart":
      // console.log("reducer called", action);
      const filterData = data.filter((item) => item._id !== action.id);
      // console.log("filter", filterData);
      return [...filterData];
    default:
      return data;
  }
};
