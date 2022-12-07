import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 20%;
  padding: 20px;
`;

export const CardProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;
`;

export const ProfileUser = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #444444;
  margin-bottom: 2px;
`;

export const ProfileDescription = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  color: #808080;

  ::before {
    content: "@";
  }
`;

// //////////////////////// ul

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 10px 0;
  margin-top: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

interface LiProps {
  active?: boolean;
}

export const Li = styled.li<LiProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) => (props.active ? "#fbfbfc" : "#fff")};
  border-bottom: ${(props) =>
    props.active ? "1px solid #f0f0f0" : "1px solid transparent"};
  border-left: ${(props) => (props.active ? "3px solid #2e77f2" : "none")};
  transition: 0.3s;
`;

export const Item = styled.a<LiProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0;
  border-bottom: ${(props) =>
    props.active ? "1px solid transparent" : "1px solid #f0f0f0"};
  text-decoration: none;
  color: ${(props) => (props.active ? "#2e77f2" : "#49607e")};
  transition: 0.3s;

  :last-child {
    border-bottom: none;
  }

  span {
    margin-left: 10px;
  }

  :hover {
    color: #2e77f2;
  }
`;
