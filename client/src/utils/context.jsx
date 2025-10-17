import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [Authuser, setAuthuser] = useState(null);

  return (
    <AuthContext.Provider value={{ Authuser, setAuthuser }}>
      {children}
    </AuthContext.Provider>
  );
};
