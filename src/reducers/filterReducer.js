export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [payload]: !state.category[payload],
        },
      };
    case "RATING":
      return {
        ...state,
        rating: payload,
      };
    case "SORT":
      return {
        ...state,
        sortBy: payload,
      };
    case "PRICE":
      return {
        ...state,
        price: payload,
      };
    case "SEARCH":
      return {
        ...state,
        searchQuery: payload,
      };
    case "CLEAR_FILTER":
      return {
        category: {
          desk: false,
          table: false,
          chair: false,
          storage: false,
        },
        rating: 0,
        sortBy: "",
        price: 10000,
        searchQuery: "",
      };
    default:
      throw new Error("Unhandled action type");
  }
};
