import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const fetchProducts = async (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS",
  });
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/products`);
    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCTS_FAILURE",
      payload: error,
    });
  }
};
