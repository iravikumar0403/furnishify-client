import { AddressProvider } from "./address-context";
import { AuthProvider } from "./auth-context";
import { FiltersProvider } from "./filter-context";
import { ProductProvider } from "./product-context";

const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <FiltersProvider>
          <AddressProvider>{children}</AddressProvider>
        </FiltersProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default StateProvider;
