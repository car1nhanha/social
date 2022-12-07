import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  background-color: #f4f5f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3px 10px;
  border-radius: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  margin-left: 10px;
  font-weight: 100;

  ::placeholder {
    color: #a5afbf;
  }
`;
