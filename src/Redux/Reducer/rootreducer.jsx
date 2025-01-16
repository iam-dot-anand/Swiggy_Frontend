    import { combineReducers } from "redux";
    import { cartData } from "./reducer";
    import { ProductData } from "./productReducer";
    import { CuisineData } from "./cuisineReducer";
    import { loginReducer } from "./loginReducer";
    import { signupReducer } from "./signupReducer";
   

    export default combineReducers({ cartData, ProductData, CuisineData, loginReducer, signupReducer});
