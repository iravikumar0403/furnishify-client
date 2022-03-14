import { CartList, CartSummary } from "../components";

export const Cart = () => {
  return (
    <main className="cart">
      <CartList />
      <CartSummary />
    </main>
  );
};
