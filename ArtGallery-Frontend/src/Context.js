import { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const updateUserName = (name) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
