import { createContext, useReducer } from "react";

let initialState = [
  { day: "Monday", available: true, amount: "" },
  { day: "Tuesday", available: false, amount: "" },
  { day: "Wednesday", available: true, amount: "" },
  { day: "Thursday", available: true, amount: "" },
  { day: "Friday", available: false, amount: "" }
];
const availabilityStore = createContext(initialState);
const { Provider } = availabilityStore;

const AvailabilityProvider = ({ children }) => {
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

export { availabilityStore, AvailabilityProvider };
