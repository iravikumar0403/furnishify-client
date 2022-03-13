import { Filters, Products } from "../components";

export const ProductListing = () => {
  return (
    <div className="grid-20-80">
      <Filters />
      <Products />
    </div>
  );
};
