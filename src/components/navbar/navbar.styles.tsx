import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// //////////////////// left

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

// container do icon
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #eff4fc;
  padding: 5px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const Icon = styled.img`
  max-width: 25px;
  max-height: 25px;
`;

// title
export const Title = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
  color: #334c6e;
`;
// //////////////////// right

export const NavbarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  button {
    margin-left: 15px;
  }
`;
