import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers";
import { fetchProducts, fetchCart } from "../services";
import { useAuth } from "./auth-context";

const productContext = createContext();
const ProductProvider = ({ children }) => {
  const [{ products, cart, loading, error }, dispatch] = useReducer(
    productReducer,
    {
      products: [],
      error: null,
      loading: true,
      cart: [],
    }
  );
  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart(dispatch);
    }
  }, [user]);

  return (
    <productContext.Provider
      value={{
        loading,
        products,
        cart,
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
