import { createContext, useContext, useEffect, useState } from "react";
import { fetchAddress } from "../services";
import { useAuth } from "./auth-context";

const addressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchAddress(setAddress);
    }
  }, [user]);

  return (
    <addressContext.Provider
      value={{ address, selectedAddress, setSelectedAddress, setAddress }}
    >
      {children}
    </addressContext.Provider>
  );
};

const useAddress = () => useContext(addressContext);

export { useAddress, AddressProvider };
