import styled from "styled-components";

interface profileGradientProps {
  color: any;
  radius?: number;
}

export const ProfileGradientContainer = styled.div<profileGradientProps>`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.color.join(", ")}
  );
  height: 100%;
  width: 100%;
  border-radius: ${(props) => props.radius}px;
  overflow: hidden;
`;
