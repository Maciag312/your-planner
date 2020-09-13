const initialState = {
  authenticated: false,
  jwt: "",
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATION":
      return {
        ...state,
        authenticated: action.authenticated,
      };
    case "SET_JWT":
      return {
        ...state,
        jwt: action.jwt,
      };

    default:
      return state;
  }
};

export default authentication;
