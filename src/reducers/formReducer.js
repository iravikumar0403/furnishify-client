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

export const addressFormReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "PHONE":
      return {
        ...state,
        phone: payload,
      };
    case "STREET":
      return {
        ...state,
        street: payload,
      };
    case "CITY":
      return {
        ...state,
        city: payload,
      };
    case "STATE":
      return {
        ...state,
        state: payload,
      };
    case "ZIP":
      return {
        ...state,
        zip: payload,
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
