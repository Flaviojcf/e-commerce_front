import { UserCircle, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Container,
  ContainerCart,
  ContainerLink,
  ContainerLogo,
  ContainerUser,
  ContainerUserAuth,
} from "./styles";

export function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, accountName } = useAuthContext();

  function handleRedirect(redirect: string) {
    navigate(redirect);
  }

  function handleLogout() {
    localStorage.clear();
    location.reload()
  }

  return (
    <Container>
      <ContainerLogo onClick={() => handleRedirect("/")}>
        <img src="/DeliverizeLogo.png" alt="" />
      </ContainerLogo>
      <ContainerUser>
        {isAuthenticated ? (
          <ContainerLink>
            <ContainerUserAuth>
              <p>{accountName.toUpperCase()}</p>
            </ContainerUserAuth>

            <p onClick={handleLogout}>Sair</p>
          </ContainerLink>
        ) : (
          <ContainerLink onClick={() => handleRedirect("/Login")}>
            <UserCircle size={32} color="red" />
            <p>Entrar</p>
          </ContainerLink>
        )}
        <ContainerLink className="Cart" onClick={() => handleRedirect("/Cart")}>
          <ContainerCart>
            <ShoppingCart size={32} color="red" />
            <p>0</p>
          </ContainerCart>
          <p>Carrinho</p>
        </ContainerLink>
      </ContainerUser>
    </Container>
  );
}
