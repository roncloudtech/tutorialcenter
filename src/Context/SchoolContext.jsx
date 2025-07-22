import { createContext, useContext, useState } from "react";

const SchoolContext = createContext(null);
// to consume my data directly from the context
export const useSchoolContext = () => useContext(SchoolContext);

const SchoolContextProvider = ({ children }) => {
  const [expandSideBar, setExpandSideBar] = useState(true);
  // Get authenticated user from local storage or set to an empty object
  // This is to ensure that the user data persists even after a page refresh
  const [authenticatedUser, setAuthenticatedUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );
  // Get the user role from local storage or set to an empty string
  const [role, setRole] = useState(localStorage.getItem("userRole") || "");
  const contextValue = {
    expandSideBar,
    setExpandSideBar,
    authenticatedUser,
    setAuthenticatedUser,
    role,
    setRole,
  };
  return (
    <SchoolContext.Provider value={contextValue}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;
