export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIATE_AUTH":
      return {
        ...state,
        loading: true,
        user: null,
        error: "",
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        error: "",
      };
    default:
      throw new Error("Unhandled action type");
  }
};
