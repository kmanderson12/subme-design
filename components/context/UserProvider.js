import { createContext, useReducer } from "react";

let initialState = {
  disabled: true,
  name: "Kyle Anderson",
  email: "cookevillewebdev@gmail.com",
  role: "Substitute Teacher"
};
const store = createContext(initialState);
const { Provider } = store;

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "EDIT":
        return { ...state, disabled: false };
      case "CANCEL":
        return { ...initialState, disabled: true };
      case "HANDLE_CHANGE":
        return { ...state, [action.name]: action.value };
      case "SUBMIT":
        initialState = { ...state, disabled: true };
        return initialState;
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, UserProvider };
