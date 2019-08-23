import {
  GET_ALL_PRODUCTS_INIT,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
} from "../actions";

let initialState = [];
const cachedState = localStorage.getItem("products");

if (cachedState) {
  initialState = JSON.parse(cachedState);
}

export function productsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_PRODUCTS_INIT:
      return state;
    case GET_ALL_PRODUCTS_SUCCESS:
      return payload.products;
    case GET_ALL_PRODUCTS_ERROR:
      return payload.error;
    default:
      return state;
  }
}
