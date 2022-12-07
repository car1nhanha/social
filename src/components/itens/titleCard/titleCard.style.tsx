import styled from "styled-components";

interface ContainerTitleProps {
  mt: number;
  mb: number;
}

export const ContainerTitle = styled.div<ContainerTitleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  padding: 0 10px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #a1adbd;
  margin: 0;
`;

interface NotificationProps {
  color: string;
}

export const Notification = styled.span<NotificationProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  width: 25px;
  height: 25px;
  border-radius: 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 200;
`;
