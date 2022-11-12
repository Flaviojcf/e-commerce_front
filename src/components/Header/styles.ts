import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background: #f4f4f4;

  @media screen and (max-width: 420px) {
    gap: 1rem;
  }
`;
export const ContainerLogo = styled.div`
  cursor: pointer;
`;
export const ContainerUser = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 486px) {
    gap: 0.5rem;
    flex-direction: column;
  }
`;

export const ContainerCart = styled.div`
  &:first-child {
    position: relative;
  }

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: -3rem;
    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    margin-left: 1rem;
    background: orange;
    color: white;
  }
`;

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > p {
    color: red;
    cursor: pointer;
  }
`;

export const ContainerUserAuth = styled.div`
  display: flex;
  color: red;

`;
