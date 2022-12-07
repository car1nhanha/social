import { ContainerTitle, Notification, Title } from "./titleCard.style";

interface TitleCardProps {
  title: string;
  notification: number;
  colorNotification: string;
  mt?: number;
  mb?: number;
}

export const TitleCard = ({
  colorNotification,
  notification,
  mt = 30,
  mb = 10,
  title,
}: TitleCardProps) => {
  return (
    <ContainerTitle mt={mt} mb={mb}>
      <Title>{title}</Title>
      <Notification color={colorNotification}>{notification}</Notification>
    </ContainerTitle>
  );
};
