import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface UserContextType {
  user: any; // Replace 'any' with the specific type of your user data
  setUser: Dispatch<SetStateAction<any>>; // Replace 'any' with the type of the user data
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {
    console.warn("setUser function not overridden");
  },
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with the type of your user data

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
