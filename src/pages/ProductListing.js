import { Filters, Products } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const ProductListing = () => {
  useDocumentTitle("Products | Furnishify");
  return (
    <div className="grid-20-80">
      <Filters />
      <Products />
    </div>
  );
};
