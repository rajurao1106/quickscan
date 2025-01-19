import React, { createContext, useState, useEffect } from "react";

// Create the context
export const StoreContext = createContext();

// Custom hook for localStorage synchronization
const useLocalStorageSync = (key, value) => {
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  }, [key, value]);
};

// Create the Provider component
export const StoreProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState(() => {
    try {
      const savedData = localStorage.getItem("selectedData");
      return savedData ? JSON.parse(savedData) : null;
    } catch {
      return null;
    }
  });

  const [calculate, setCalculate] = useState(() => {
    try {
      const savedData = localStorage.getItem("calculate");
      return savedData ? JSON.parse(savedData) : null;
    } catch {
      return null;
    }
  });

  const [addresses, setAddresses] = useState(() => {
    try {
      const savedAddresses = localStorage.getItem("addresses");
      return savedAddresses ? JSON.parse(savedAddresses) : [];
    } catch {
      return [];
    }
  });

  const [count, setCount] = useState(() => {
    try {
      const savedCount = localStorage.getItem("count");
      return savedCount ? parseInt(savedCount, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Sync states with localStorage
  useLocalStorageSync("selectedData", selectedData);
  useLocalStorageSync("calculate", calculate);
  useLocalStorageSync("addresses", addresses);
  useLocalStorageSync("count", count);

  // Function to update the selected data
  const updateData = (data) => {
    setSelectedData(data);
    setCount((prevCount) => prevCount + 1);
  };

  const updateCalculate = (data) => {
    setCalculate(data);
  };

  // Separate function to update the address
  const updateAddress = (address) => {
    setAddresses(address);
  };

  // Separate function to update the cart count
  const incrementCart = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <StoreContext.Provider
      value={{
        selectedData,
        updateData,
        calculate,
        updateCalculate,
        addresses,
        updateAddress,
        count,
        incrementCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
