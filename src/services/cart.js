import axios from "axios";
import { logout } from "./auth";
const { REACT_APP_API_URL } = process.env;

export const fetchCart = async (dispatch) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/cart`);
    dispatch({
      type: "FETCH_CART",
      payload: data[0].products,
    });
  } catch (error) {
    if (error.response.status === 401) {
      logout();
    } else {
      console.log(error);
    }
  }
};

export const updateCart = async (products) => {
  try {
    await axios.post(`${REACT_APP_API_URL}/cart`, {
      products,
    });
  } catch (error) {
    if (error.response.status === 401) {
      logout();
    } else {
      console.log(error);
    }
  }
};
