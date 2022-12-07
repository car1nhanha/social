import { ProfileGradient } from "../../profileGradient";
import {
  ImageContainer,
  StatusContainer,
  StatusImage,
  StatusName,
} from "./story.styles";

interface StatusProps {
  backgroundImage: string;
  name: string;
  avatar?: string;
}

export const Status = ({ backgroundImage, name, avatar }: StatusProps) => {
  return (
    <StatusContainer backgroundImage={backgroundImage}>
      <ImageContainer>
        <ProfileGradient color={["#D70270", "#734F96", "#0038A8"]} radius={7}>
          <StatusImage src={avatar} />
        </ProfileGradient>
      </ImageContainer>
      <StatusName>
        {name.length > 10 ? name.substring(0, 10) + "..." : name}
      </StatusName>
    </StatusContainer>
  );
};
