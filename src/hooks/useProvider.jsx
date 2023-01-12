import { useContext } from "react";
import ProviderContext from "../context/Provider";

const useProvider = () => {
  return useContext(ProviderContext);
};

export default useProvider;
