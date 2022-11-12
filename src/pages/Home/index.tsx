import { useState } from "react";
import { Button } from "../../components/Button";
import { Item } from "../../components/Item";
import { allIngredients } from "../../db/Ingredients";
import { useAuthContext } from "../../hooks/useAuthContext";
import { OptionsComponent } from "./components/OptionsComponent";
import {
  Container,
  Containerimg,
  ContainerItem,
  ContainerText,
} from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerItem>
        <Containerimg>
          <img src="Hamburguer.png" alt="" />
        </Containerimg>
        <ContainerText>
          <h1>Oferta Picanha Cheddar Bacon</h1>
          <p>
            Hamburguer de picanha, molho de picanha, cebola crispy, bacon,
            queijo cheddar, molho cheddar e pão mix de gergelim
          </p>
          <span>
            <p>R$31,99</p>
            <p>R$34,95</p>
          </span>
        </ContainerText>
      </ContainerItem>
      <OptionsComponent />
    </Container>
  );
}
