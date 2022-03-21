export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: payload,
        loading: false,
      };

    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case "FETCH_CART":
      return {
        ...state,
        cart: payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload._id),
      };

    case "INCREMENT_PRODUCT_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_PRODUCT_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      throw new Error("Unhandled action type");
  }
};
