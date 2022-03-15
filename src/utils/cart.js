export const calcCartPrice = (cartItems) => {
  return cartItems.reduce(
    (price, product) => (price = price + product.price * product.quantity),
    0
  );
};

export const calcTotalPrice = (cartPrice, deliveryCharges, discount = 0) =>
  cartPrice - discount + deliveryCharges;

export const calcDeliveryCharges = (cartTotal) => (cartTotal > 3000 ? 0 : 499);
