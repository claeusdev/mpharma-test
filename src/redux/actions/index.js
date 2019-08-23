import Axios from "axios";

export const GET_ALL_PRODUCTS_INIT = "products:getAll";
export const GET_ALL_PRODUCTS_SUCCESS = "products:getAllSuccess";
export const GET_ALL_PRODUCTS_ERROR = "products:getAllError";
export const ADD_PRODUCT_INIT = "products:AddInit";
export const ADD_PRODUCT_SUCCESS = "products:AddSuccess";
export const ADD_PRODUCT_ERROR = "products:AddError";
export const REMOVE_PRODUCT_SUCCESS = "products:RemoveSuccess";
export const REMOVE_PRODUCT_ERROR = "products:RemoveError";

export const getAll = () => {
  return {
    type: GET_ALL_PRODUCTS_INIT
  };
};
export const getAllSuccess = products => {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: {
      products
    }
  };
};
export const getAllError = error => {
  return {
    type: GET_ALL_PRODUCTS_ERROR,
    payload: {
      error
    }
  };
};
export const getAllProducts = () => {
  return async dispatch => {
    dispatch(getAll());
    try {
      const cachedState = localStorage.getItem("products");
      if (!cachedState) {
        const {
          data: { products }
        } = await Axios.get("http://www.mocky.io/v2/5c3e15e63500006e003e9795");
        localStorage.setItem("products", JSON.stringify(products));
        const data = await localStorage.getItem("products");
        return dispatch(getAllSuccess(JSON.parse(data)));
      }
      return dispatch(getAllSuccess(JSON.parse(cachedState)));
    } catch (error) {
      return error.message;
    }
  };
};