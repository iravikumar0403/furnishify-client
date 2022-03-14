import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const signup = async ({ name, email, password }, dispatch) => {
  dispatch({
    type: "INITIATE_AUTH",
  });
  try {
    const { data } = await axios.post(`${REACT_APP_API_URL}/auth/signup`, {
      name,
      email,
      password,
    });
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({
      type: "AUTH_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_FAILURE",
      payload:
        error.response.data?.message ||
        "Something went wrong! Please try again",
    });
  }
};

export const login = async ({ email, password }, dispatch) => {
  dispatch({
    type: "INITIATE_AUTH",
  });
  try {
    const { data } = await axios.post(`${REACT_APP_API_URL}/auth/login`, {
      email,
      password,
    });
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({
      type: "AUTH_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "AUTH_FAILURE",
      payload:
        error.response.data?.message ||
        "Something went wrong! Please try again",
    });
  }
};

export const logout = (dispatch) => {
  localStorage.clear();
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: "LOGOUT",
  });
};
