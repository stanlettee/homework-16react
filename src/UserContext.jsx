import { createContext, useContext, useState, useEffect, useRef, useReducer  } from "react";


const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "GOOD":
      return { ...state, good: state.good + 1 };
    case "NEUTRAL":
      return { ...state, neutral: state.neutral + 1 };
    case "BAD":
      return { ...state, bad: state.bad + 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const renderCount = useRef(0);



  useEffect(() => {
    renderCount.current += 1;
    console.log(`Your state has been reloaded: ${renderCount.current} times`)
 }, [state]);

  const total = state.good + state.neutral + state.bad;
  const positiveFeedback = total === 0 ? 0 : (state.good / total) * 100;
 return (
   <UserContext.Provider value={{ state, dispatch, total, positiveFeedback }}>
     {children}
   </UserContext.Provider>
 );
};
