import { AddressProvider } from "./address-context";
import { AuthProvider } from "./auth-context";
import { FiltersProvider } from "./filter-context";
import { ModalProvider } from "./modal-context";
import { ProductProvider } from "./product-context";

const StateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
      <ProductProvider>
        <FiltersProvider>
          <AddressProvider>{children}</AddressProvider>
        </FiltersProvider>
      </ProductProvider>
      </ModalProvider>
    </AuthProvider>
  );
};

export default StateProvider;
