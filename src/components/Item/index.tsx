import { Button } from "../Button";
import { Container, ContainerName, ContainerPrice } from "./styles";

type ItemProps = {
  name: string;
  price: number;
};

export function Item({ name, price}: ItemProps) {
  return (
    <Container>
      <ContainerName>
        <p>{name}</p>
      </ContainerName>
      <Button />
      <ContainerPrice>
        <p>+ R${price}</p>
      </ContainerPrice>
    </Container>
  );
}
