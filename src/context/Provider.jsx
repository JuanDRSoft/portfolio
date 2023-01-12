import axios from "axios";
import React, { createContext } from "react";

const ProviderContext = createContext();

const Provider = ({ children }) => {
  const sendEmail = async (data) => {
    const dataEmail = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/users`,
      data
    );

    console.log(dataEmail);
  };

  return (
    <ProviderContext.Provider value={{ sendEmail }}>
      {children}
    </ProviderContext.Provider>
  );
};

export { Provider };

export default ProviderContext;
