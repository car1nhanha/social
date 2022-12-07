import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ContainerItemContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerImage = styled.div`
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.p`
  margin: 0;
  margin-left: 10px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;
