import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { AccountInterface } from 'get-starknet';

interface UserContextType {
  user: any; // Replace 'any' with the specific type of your user data
  setUser: Dispatch<SetStateAction<any>>; // Replace 'any' with the type of the user data
  provider: AccountInterface | null;
  setProvider: Dispatch<SetStateAction<AccountInterface | null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {
    console.warn("setUser function not overridden");
  },
  provider: null,
  setProvider: () => {
    console.warn("setProvider function not overridden");
  },
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with the type of your user data
  const [provider, setProvider] = useState<AccountInterface | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser, provider, setProvider }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
