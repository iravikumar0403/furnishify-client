export const loginFormReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "SHOW/HIDE_PASS":
      return {
        ...state,
        showPass: !state.showPass,
      };
    default:
      throw new Error("Unhandled action type");
  }
};
