import styled from "styled-components";

export const ContainerOptions = styled.div`
  border: 1px solid #4e4e4e;
  width: 25rem;
  border-radius: 8px;
  padding: 2rem;

  @media screen and (max-width: 425px) {
    padding: 1rem;
    width: 18rem;
  }
`;

export const ContainerForm = styled.form`
  height: 100%;

  > header {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    background: rgba(253, 215, 14, 0.2);
    padding: 1rem;
    gap: 0.4rem;

    > p:first-child {
      font-size: 14px;
    }

    > p:last-child {
      font-size: 12px;
      color: #e49700;
    }
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    font-weight: bold;
  }
  font-size: 12px;
  background: rgba(253, 215, 14, 0.2);
  padding: 1rem;
`;

export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  > input, label {
    cursor: pointer;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-top: 1rem;

  > button {
    background: #f09035;
    color: white;
    padding: 0.2rem 4rem;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: not-allowed;
  }

  .quantityExists {
    cursor: pointer;
  }

  @media screen and (max-width: 425px) {
    gap: 0.5rem;

    > button {
      padding: 0.2rem 2rem;
    }
  }
`;

export const ContainerButton = styled.div`
  border: 1px solid #f09035;
  display: flex;
  width: 6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 0.5rem;
  margin-right: auto;

  span {
    cursor: pointer;
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }

  .redClass {
    color: red;
  }
`;
