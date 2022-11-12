import { useState } from "react";
import { Item } from "../../../components/Item";
import { allIngredients } from "../../../db/Ingredients";
import { useAuthContext } from "../../../hooks/useAuthContext";
import {
  ContainerButton,
  ContainerButtons,
  ContainerFooter,
  ContainerForm,
  ContainerInput,
  ContainerInputs,
  ContainerOptions,
} from "./styles";

export function OptionsComponent() {
  const database = allIngredients;
  const [quantity, setQuantity] = useState(0);

  function handleAdd(id: string) {
    if (quantity > 0 && id === "-") {
      setQuantity(quantity - 1);
    } else if (id === "+") {
      setQuantity(quantity + 1);
    }
  }

  return (
    <ContainerOptions>
      <ContainerForm>
        <header>
          <p>Adicionar ingredientes</p>
          <p>Até 8 ingredientes.</p>
        </header>
        {database.map((ingredient) => {
          return (
            <Item
              key={ingredient.id}
              name={ingredient.name}
              price={ingredient.price}
            />
          );
        })}
        <ContainerFooter>
          <p>Precisa de talher?</p>
          <ContainerInputs>
            <ContainerInput>
              <input type="radio" id="yes" name="option" defaultChecked />
              <label htmlFor="yes">Sim</label>
            </ContainerInput>
            <ContainerInput>
              <input type="radio" id="no" name="option" />
              <label htmlFor="no">Não</label>
            </ContainerInput>
          </ContainerInputs>
        </ContainerFooter>
        <ContainerButtons>
          <ContainerButton>
            <span
              onClick={() => handleAdd("-")}
              className={quantity > 0 ? "redClass" : ""}
            >
              -
            </span>
            <p>{quantity}</p>
            <span onClick={() => handleAdd("+")} className="redClass">
              +
            </span>
          </ContainerButton>
          <button
            type="submit"
            className={quantity > 0 ? "quantityExists" : ""}
          >
            Adicionar
          </button>
        </ContainerButtons>
      </ContainerForm>
    </ContainerOptions>
  );
}
