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

    default:
      throw new Error("Unhandled action type");
  }
};
