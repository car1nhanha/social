import { Button } from "../button";
import { ProfileGradient } from "../profileGradient";
import {
  ContainerButtons,
  ContainerCard,
  ContainerImage,
  ContainerInvate,
  Image,
  UserLine,
} from "./cardNewFriend.styles";

interface CardNewFriendProps {
  name: string;
  avatar: string;
  gradient: string[];
}

export const CardNewFriend = ({
  avatar,
  gradient,
  name,
}: CardNewFriendProps) => {
  return (
    <ContainerCard>
      <UserLine>
        <ContainerImage size="medium">
          <ProfileGradient color={gradient}>
            <Image src={avatar} alt="avatar" />
          </ProfileGradient>
        </ContainerImage>
        <ContainerInvate>
          <span>{name}</span> wants to add you to friends
        </ContainerInvate>
      </UserLine>
      <ContainerButtons>
        <Button color="blue" size="large">
          Accept
        </Button>
        <Button color="transparent" size="large">
          Decline
        </Button>
      </ContainerButtons>
    </ContainerCard>
  );
};
