import { createContext, useContext, useState, useEffect, useRef  } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

  const [goodStat, changeGood] = useState(0)
  const [neutralStat, changeNeutral] = useState(0)
  const [badStat, changeBad] = useState(0)
const renderCount = useRef(0);



  useEffect(() => {
    renderCount.current += 1;
    console.log(`Your state has been reloaded: ${renderCount.current} times`)
 }, [goodStat, neutralStat, badStat]);

 let total = goodStat + neutralStat + badStat
  let positiveFeedback = 100 / total * goodStat
 return (
   <UserContext.Provider value={{ goodStat, neutralStat, badStat, changeGood, changeNeutral, changeBad, positiveFeedback, total }}>
     {children}
   </UserContext.Provider>
 );
};
