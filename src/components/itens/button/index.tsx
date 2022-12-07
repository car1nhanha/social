import { ButtonContainer } from "./button.styles";

interface buttonProps {
  children: React.ReactNode;
  color?: "blue" | "transparent";
  size?: "small" | "medium" | "large";
}

export const Button = ({ children, color, size = "small" }: buttonProps) => {
  return (
    <ButtonContainer color={color} size={size}>
      {children}
    </ButtonContainer>
  );
};
