import styled from "styled-components";

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 3rem;

  gap: 4rem;

  overflow: hidden;
`;

export const ContentAdress = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 0.75rem;

  width: 40rem;
  height: 23.25rem;

  background: #f1f1f1;
  box-shadow: 16px 23px 21px 0px rgba(0, 0, 0, 0.75);
  border-radius: 6px;

  padding: 40px;
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & form input {
    width: 100%;
    border-radius: 4px;
    padding: 12px;

    border: 1px solid #e6e5e5;
  }

  @media screen and (max-width: 768px) {
    width: 35rem;
  }

  @media screen and (max-width: 590px) {
    width: 18rem;
    font-size: 0.75rem;
  }
`;

export const AdressDelivery = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 44px;
  margin-bottom: 32px;

  & div {
    display: flex;
    align-items: center;
    gap: 8px;

    @media screen and (max-width: 590px) {
      width: 15rem;
    }
  }

  & div:first-child {
    font-family: "Roboto";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #403937;
  }

  & div:last-child {
    padding-left: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
    line-height: 130%;
    color: #574f4d;
  }
`;

export const Cep = styled.div`
  display: flex;
  width: 200px;
  height: 42px;
`;

export const Street = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
`;

export const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Complement = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 42px;

  input:first-child {
    width: 200px;
    @media screen and (max-width: 590px) {
      width: 7rem;
      font-size: 0.75rem;
    }
  }

  input:last-child {
    width: 348px;
    @media screen and (max-width: 590px) {
      width: 7rem;
      font-size: 0.75rem;
    }
  }
`;

export const ComplementAdress = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 42px;

  input:nth-child(1) {
    width: 200px;
    @media screen and (max-width: 590px) {
      width: 7rem;
    }
  }
  input:nth-child(2) {
    width: 276px;
    @media screen and (max-width: 590px) {
      width: 7rem;
    }
  }
  input:nth-child(3) {
    width: 60px;

    @media screen and (max-width: 590px) {
      display: none;
    }
  }
`;

export const ContentPayment = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;

  width: 40rem;
  height: 15rem;

  border-radius: 6px;
  border: 1px solid #e6e5e5;
  background: #f1f1f1;
  box-shadow: 16px 23px 21px 0px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 768px) {
    width: 35rem;
  }

  @media screen and (max-width: 590px) {
    width: 18rem;
  }
`;
