import {
  GET_ALL_PRODUCTS_INIT,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
  ADD_PRODUCT_INIT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_ERROR,
  UPDATE_PRODUCT_SUCCESS
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
    case ADD_PRODUCT_INIT:
      return state;
    case ADD_PRODUCT_SUCCESS:
      return payload.products;
    case ADD_PRODUCT_ERROR:
      return payload.error;
    case REMOVE_PRODUCT_SUCCESS:
      return payload.products;
    case UPDATE_PRODUCT_SUCCESS:
      return payload.products;
    case REMOVE_PRODUCT_ERROR:
      return payload.error;
    default:
      return state;
  }
}
