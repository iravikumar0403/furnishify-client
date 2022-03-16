import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const filterContext = createContext();

const FiltersProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(filterReducer, {
    category: {
      desk: false,
      table: false,
      chair: false,
      storage: false,
    },
    rating: 0,
    sortBy: "",
    price: 10000,
    searchQuery: "",
  });

  return (
    <filterContext.Provider
      value={{
        filters,
        dispatch,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { useFilter, FiltersProvider };
