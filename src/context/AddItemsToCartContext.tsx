import { createContext, ReactNode, useState } from "react";

interface AddItemsToCartProps {
  checkTotalItems: (id: string) => void;
  totalCounter: number;
}

interface AddItemsToCartProviderProps {
  children: ReactNode;
}
export const AddItemsToCartContext = createContext({} as AddItemsToCartProps);

export function AddItemsToCartProvider({
  children,
}: AddItemsToCartProviderProps) {
  const [totalCounter, setTotalCounter] = useState(0);

  function checkTotalItems(id: string) {
    if (id === "-") {
      setTotalCounter(totalCounter - 1);
    } else if (id === "+") {
      setTotalCounter(totalCounter + 1);
    }
  }
  return (
    <AddItemsToCartContext.Provider value={{ checkTotalItems, totalCounter }}>
      {children}
    </AddItemsToCartContext.Provider>
  );
}
