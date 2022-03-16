import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers";

const initialState = {
  user: null,
  error: "",
  loading: false,
};

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [{ user, error, loading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      dispatch({
        type: "AUTH_SUCCESS",
        payload: data,
      });
    }
  }, []);

  return (
    <authContext.Provider value={{ user, error, loading, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
