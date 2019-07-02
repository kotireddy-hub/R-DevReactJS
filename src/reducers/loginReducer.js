const initialState = {
  userName: "",
  Password: "",
  errorMessage: ""
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, userName: action.payload };
    case "PASSWORD":
      return { ...state, Password: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: "please enter valid credentials" };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, Password: "", userName: "", errorMessage: "" };
    default:
      return state;
  }
}
