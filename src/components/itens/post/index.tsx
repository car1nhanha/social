import { ProfileGradient } from "../profileGradient";
import {
  BodyText,
  Container,
  ContainerHeaderText,
  ContainerImage,
  ContainerItemContact,
  DateText,
  Image,
  ImagesContainer,
  Name,
  Option,
  UserInformation,
} from "./post.styles";

import { FiMoreHorizontal } from "react-icons/fi";
import { ImageItem } from "./imagePost";

interface IContactItem {
  name: string;
  avatar: string;
  gradient: string[];
}

const UserHeader = ({ name, avatar, gradient }: IContactItem) => {
  return (
    <ContainerItemContact>
      <UserInformation>
        <ContainerImage>
          <ProfileGradient color={gradient} radius={10}>
            <Image src={avatar} alt={name} />
          </ProfileGradient>
        </ContainerImage>
        <ContainerHeaderText>
          <Name>{name}</Name>
          <DateText>12 horas atrás</DateText>
        </ContainerHeaderText>
      </UserInformation>
      <Option>
        <FiMoreHorizontal size={20} color="#bbc4cf" />
      </Option>
    </ContainerItemContact>
  );
};

export const Post = () => {
  return (
    <Container>
      <UserHeader
        avatar="images/profile07.png"
        name="Laura Fisher"
        gradient={["#ff0", "#f00"]}
      />
      <BodyText>
        This was one of the most epic journeys, that i&apos;ve got myself
        involved in. Maybe one of the most memorizable in my entire life!
      </BodyText>
      <ImagesContainer>
        <ImageItem
          className="tall"
          src="https://i.pinimg.com/564x/92/d9/d2/92d9d26d9c83094389d9a86847bad57b.jpg"
        />
        <ImageItem
          className="tall"
          src="https://i.pinimg.com/564x/93/74/6e/93746e2743282bb809a2158582f78e21.jpg"
        />
        <ImageItem
          className="big"
          src="https://i.pinimg.com/564x/e2/74/fb/e274fbe65bf899b2165cc3c06b435193.jpg"
        />
      </ImagesContainer>
    </Container>
  );
};
