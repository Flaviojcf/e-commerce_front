import { useState } from "react";
import { useAddItemsToCartContext } from "../../hooks/useAddItemsToCartContext";
import { ContainerButton } from "./styles";

export function Button() {
  const [quantity, setQuantity] = useState(0);
  const { checkTotalItems, totalCounter } = useAddItemsToCartContext();

  function handleAdd(id: string) {
    if (quantity > 0 && id === "-") {
      checkTotalItems("-");
      setQuantity(quantity - 1);
    } else if (quantity < 8 && totalCounter < 8 && id === "+") {
      checkTotalItems("+");
      setQuantity(quantity + 1);
    }
  }

  return (
    <ContainerButton>
      <span
        onClick={() => handleAdd("-")}
        className={totalCounter > 0 && quantity > 0 ? "redClass" : ""}
      >
        -
      </span>
      <p>{quantity}</p>
      <span
        onClick={() => handleAdd("+")}
        className={totalCounter < 8 ? "redClass" : ""}
      >
        +
      </span>
    </ContainerButton>
  );
}
