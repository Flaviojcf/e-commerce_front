import styled from "styled-components";

export const ContainerButton = styled.div`

  border: 1px solid #f09035;
  display: flex;
  width: 5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 0.5rem;
  margin-left: auto;

  span {
    cursor: not-allowed;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    
  }

  .redClass  {
    color: red;
    cursor: pointer;
  }
`;
