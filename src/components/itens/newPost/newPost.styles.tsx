import styled from "styled-components";

export const NewPostContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Input = styled.textarea`
  border: none;
  background-color: transparent;
  margin-left: 15px;
  outline: none;
  color: #4c5159;
  width: 100%;
  resize: none;
  height: auto;

  ::placeholder {
    color: #a4afbe;
  }
`;
