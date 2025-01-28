import { put, call } from "redux-saga/effects";

function* cuisineSaga(action) {
  console.log("cuisineSaga", action);
  const { id, restaurantName } = action.RestaurantDetails;
  // console.log("cuisineData---->",id, restaurantName);
  const responseData = yield fetch("https://swiggy-backend-vaij.onrender.com/product");
  const  {product}  = yield responseData.json();
  let productById = product.filter((items) => items.restaurant_id === id);
  // console.log("cuisineData---->",productById);
  let payload = {productById, restaurantName};
  console.log("this cuisine saga data", payload);

  yield put({ type: "SetCuisineData", payload });
}

export default cuisineSaga;
