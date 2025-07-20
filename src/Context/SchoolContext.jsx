import { createContext, useContext, useState } from "react";

const SchoolContext = createContext(null);
// to consume my data directly from the context
export const useSchoolContext = () => useContext(SchoolContext);

const SchoolContextProvider = ({ children }) => {
  const [expandSideBar, setExpandSideBar] = useState(true);
  const [authenticatedUser, setAuthenticatedUser] = useState({});
  const contextValue = {
    expandSideBar,
    setExpandSideBar,
    authenticatedUser,
    setAuthenticatedUser,
  };
  return (
    <SchoolContext.Provider value={contextValue}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;
