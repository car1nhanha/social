import { Fragment } from "react";
import { FiPlusSquare } from "react-icons/fi";
import { Button } from "../itens/button";
import { Profile } from "../itens/profile";
import { Seach } from "../itens/search";
import {
  Icon,
  IconContainer,
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  Title,
} from "./navbar.styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <IconContainer>
          <Icon src="/logo.png" />
        </IconContainer>
        <Title>Spacepank</Title>
      </NavbarLeft>
      <NavbarRight>
        <Seach />
        <Button color="blue">
          <Fragment>
            <FiPlusSquare color="#fff" size={15} />
            <span>Create</span>
          </Fragment>
        </Button>
        <div style={{ width: 10 }} />
        <Profile />
      </NavbarRight>
    </NavbarContainer>
  );
};
