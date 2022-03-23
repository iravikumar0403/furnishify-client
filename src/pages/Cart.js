import { CartList, CartSummary } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Cart = () => {
  useDocumentTitle("Cart | Furnishify");
  return (
    <main className="cart">
      <CartList />
      <CartSummary />
    </main>
  );
};
