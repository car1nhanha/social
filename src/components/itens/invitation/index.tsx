import { FiX } from "react-icons/fi";
import { Button } from "../button";
import { ProfileGradient } from "../profileGradient";
import {
  ButtonContainer,
  ContainerImageProfile,
  Description,
  Image,
  InvitationContainer,
  OutDoor,
} from "./invitation.styles";

export const Invitation = () => {
  return (
    <InvitationContainer>
      <OutDoor>
        <ContainerImageProfile>
          <ProfileGradient radius={7} color={["#D70270", "#734F96", "#0038A8"]}>
            <Image src="/images/profile04.png" alt="avatar" />
          </ProfileGradient>
        </ContainerImageProfile>
        <Description>Consideramos justa toda forma de amor.</Description>
      </OutDoor>
      <ButtonContainer>
        <Button color="blue" size="large">
          Accept Invitation
        </Button>
        <Button color="transparent" size="large">
          <FiX color="#49607e" size={15} />
        </Button>
      </ButtonContainer>
    </InvitationContainer>
  );
};
