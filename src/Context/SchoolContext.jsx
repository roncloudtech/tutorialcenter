import { createContext, useContext, useState } from "react";

const SchoolContext = createContext(null);
// to consume my data directly from the context
export const useSchoolContext = () => useContext(SchoolContext);

const SchoolContextProvider = ({ children }) => {
  const [expandSideBar, setExpandSideBar] = useState(true);
  // get authenticated user from local storage or set to an empty object
  // this is to ensure that the user data persists even after a page refresh
  const [authenticatedUser, setAuthenticatedUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );
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
