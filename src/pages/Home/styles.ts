import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 4rem 10rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerItem = styled.div``;

export const Containerimg = styled.div`
  display: flex;
  margin: 0 auto;


  > img {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
    align-items: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;


  flex-direction: column;
  color: #4e4e4e;
  gap: 2rem;


  > p {
    font-size: 20px;
    width: 26rem;
    flex-wrap: wrap;
   

    @media screen and (max-width: 425px) {
      width: 20rem;
    }
  }

  > span {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 24px;
    

    > p:first-child {
      align-items: center;
      color: #dc6e05;
      
    }

    > p:last-child {
      text-decoration: line-through;
      
    }
  }
`;
