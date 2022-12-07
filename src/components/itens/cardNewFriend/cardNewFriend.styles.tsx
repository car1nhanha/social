import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface IContainerImage {
  size?: "small" | "medium" | "large";
}

const resize = (size: any) => {
  switch (size) {
    case "small":
      return "40px";
    case "medium":
      return "60px";
    case "large":
      return "120px";
    default:
      return "40px";
  }
};

export const ContainerImage = styled.div<IContainerImage>`
  height: ${({ size }) => size && resize(size)};
  width: ${({ size }) => size && resize(size)};
  min-height: ${({ size }) => size && resize(size)};
  min-width: ${({ size }) => size && resize(size)};
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerInvate = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #344d6f;
  margin: 0;
  margin-left: 10px;

  span {
    color: #1d3a5f;
    font-weight: 600;
  }
`;

export const UserLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;

  button:first-child {
    margin-right: 10px;
  }
`;
