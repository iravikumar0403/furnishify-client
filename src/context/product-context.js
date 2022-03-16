import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../reducers";
import { fetchProducts, fetchCart, fetchWishlist } from "../services";
import { useAuth } from "./auth-context";

const productContext = createContext();
const ProductProvider = ({ children }) => {
  const [{ products, cart, wishlist, loading, error }, dispatch] = useReducer(
    productReducer,
    {
      products: [],
      error: null,
      loading: true,
      cart: [],
      wishlist: [],
    }
  );
  const { user } = useAuth();

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  useEffect(() => {
    if (user) {
      fetchCart(dispatch);
      fetchWishlist(dispatch);
    } else {
      dispatch({ type: "RESET" });
    }
  }, [user]);

  return (
    <productContext.Provider
      value={{
        loading,
        products,
        cart,
        wishlist,
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
