import { AuthProvider } from "./auth-context";
import { FiltersProvider } from "./filter-context";
import { ProductProvider } from "./product-context";

const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <FiltersProvider>{children}</FiltersProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default StateProvider;
