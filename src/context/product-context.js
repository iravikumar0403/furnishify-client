import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const productContext = createContext();
const ProductProvider = ({ children }) => {
  const [{ products, loading, error }, dispatch] = useReducer(productReducer, {
    products: [],
    error: null,
    loading: true,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
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

  return (
    <productContext.Provider
      value={{
        loading,
        products,
        error,
        dispatch,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProducts = () => useContext(productContext);
export { useProducts, ProductProvider };
