import { MapPinLine } from "phosphor-react";
import {
  AdressDelivery,
  Cep,
  Complement,
  ComplementAdress,
  ContainerAdress,
  ContentAdress,
  ContentInformation,
  ContentPayment,
  Street,
} from "./styles";

export function Cart() {
  return (
    <ContainerAdress>
      <ContentAdress>
        <AdressDelivery>
          <div>
            <MapPinLine size={20} />
            <span>Endereço de Entrega</span>
          </div>
          <div>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AdressDelivery>
        <form id="formCartAdress">
          <Cep>
            <input type="text" placeholder="CEP" required />
          </Cep>
          <Street>
            <input type="text" placeholder="Rua" required />
          </Street>
          <ContentInformation>
            <Complement>
              <input type="text" placeholder="Número" required />
              <input type="text" placeholder="Complemento" required />
            </Complement>
            <ComplementAdress>
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              <input type="text" placeholder="UF" required />
            </ComplementAdress>
          </ContentInformation>
        </form>
      </ContentAdress>
      <ContentPayment>
        
      </ContentPayment>
    </ContainerAdress>
  );
}
