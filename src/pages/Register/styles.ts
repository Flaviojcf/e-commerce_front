import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;

  box-shadow: 10px 10px 40px -4px rgba(0, 0, 0, 0.75);
  flex-direction: column;

  width: 30rem;
  height: 40rem;

  border-radius: 20px;
  border: 1px solid black;
  padding-bottom: 1rem;
  padding-top: 1rem;
  gap: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;

  & header {
    position: relative;
    margin-bottom: 2rem;
    h1 {
      color: black;
    }
  }

  p {
    font-weight: 400;
  }

  @media screen and (max-width: 620px) {
    width: 25rem;
  }

  @media screen and (max-width: 486px) {
    width: 18rem;
    height: 35rem;

    > p {
      width: 12rem;
    }
  }

  @media screen and (max-width: 320px) {
    width: 17rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    display: flex;
    margin-left: auto;
    text-align: right;
    font-size: 0.975rem;

    width: 10rem;
    color: red;
  }

  > input {
    width: 20rem;
    height: 3rem;
    padding-left: 1rem;
    border-color: black;
    border-radius: 6px;
    color: black;

    @media screen and (max-width: 486px) {
      width: 14rem;
    }
  }

  .Red {
    border-color: red;
  }

  .Black {
    border-color: black;
  }
`;

export const ButtonLogin = styled.button`
  margin-top: 1rem;
  width: 14rem;
  height: 3rem;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: yellow;
    color: black;
  }

  @media screen and (max-width: 486px) {
    width: 10rem;
  }
`;

export const ContainerButtonsRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;

  & button {
    width: 14rem;
    height: 3rem;
    background: black;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    font-weight: 700;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background: yellow;
      color: black;
    }
  }
`;
