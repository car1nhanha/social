import styled from "styled-components";

interface IProfileContainer {
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

export const ProfileContainer = styled.div<IProfileContainer>`
  height: ${({ size }) => size && resize(size)};
  width: ${({ size }) => size && resize(size)};
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
