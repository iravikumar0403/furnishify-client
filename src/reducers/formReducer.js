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

export const signupFormReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload,
      };
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
    case "CONFIRM_PASS":
      return {
        ...state,
        confirmPassword: payload,
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
