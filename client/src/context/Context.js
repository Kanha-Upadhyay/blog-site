import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  User: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(()=>{
localStorage.setItem("user",JSON.stringify(state.User))
  },[state.User])
  return (
    <Context.Provider
      value={{
        User: state.User,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
