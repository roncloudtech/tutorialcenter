import { createContext, useContext, useState } from "react";

const SchoolContext = createContext(null);
// to consume my data directly from the context
export const useSchoolContext = () => useContext(SchoolContext);

const SchoolContextProvider = ({ children }) => {
  const [expandSideBar, setExpandSideBar] = useState(true);
  const contextValue = {
    expandSideBar,
    setExpandSideBar,
  };
  return (
    <SchoolContext.Provider value={contextValue}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;
