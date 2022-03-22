import axios from "axios";
import { logout } from "./auth";
const { REACT_APP_API_URL } = process.env;

export const fetchWishlist = async (dispatch) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/wishlist`);
    dispatch({
      type: "FETCH_WISHLIST",
      payload: data[0].products,
    });
  } catch (error) {
    if (error.response.status === 401) {
      logout(dispatch);
    } else {
      console.log(error);
    }
  }
};

export const updateWishlist = async (products) => {
  try {
    await axios.post(`${REACT_APP_API_URL}/wishlist`, {
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
