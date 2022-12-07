import styled from "styled-components";

interface buttonProps {
  color?: "blue" | "transparent";
  size: "small" | "medium" | "large";
}

const resize = (size: string) => {
  switch (size) {
    case "small":
      return "3px 7px";
    case "medium":
      return "5px 10px";
    case "large":
      return "7px 15px";
    default:
      return "3px 7px";
  }
};

export const ButtonContainer = styled.button<buttonProps>`
  background-color: ${(props) =>
    props.color === "blue" ? "#3b82f6" : "transparent"};
  color: ${(props) => (props.color === "blue" ? "#fff" : "#5a6f8b")} !important;
  border: none;
  outline: none;
  padding: ${(props) => resize(props.size)};
  border-radius: 7px;
  border: ${(props) => (props.color === "blue" ? "none" : "1px solid #e5e7eb")};
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 0.9rem;
  }
`;
