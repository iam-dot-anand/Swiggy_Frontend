const initialState = {
  productById: [],
  restaurantName: ""
};

export const CuisineData = (state = initialState, action) => {
  // console.log("Cuisine Reducer", action);
  switch (action.type) {
    case "SetCuisineData":
      // console.log("Cuisine Data reducer", action);
      return {
        ...state,
        productById: action.payload.productById,
        restaurantName: action.payload.restaurantName,
      };
    default:
      return state;
  }
};
