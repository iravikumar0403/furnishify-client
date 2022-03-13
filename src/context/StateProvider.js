import { FiltersProvider } from "./filter-context";
import { ProductProvider } from "./product-context";

const StateProvider = ({ children }) => {
  return (
    <ProductProvider>
      <FiltersProvider>{children}</FiltersProvider>
    </ProductProvider>
  );
};

export default StateProvider;
