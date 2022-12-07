import { ProfileGradient } from "../profileGradient";
import {
  Container,
  ContainerImage,
  ContainerItemContact,
  Image,
  Name,
  Option,
  UserInformation,
} from "./contactList.styles";

import { FiMoreHorizontal } from "react-icons/fi";

const users = [
  {
    name: "Pedro Monteiro",
    avatar: "/images/profile04.png",
    gradient: ["#FF1B8D", "#FFDA00", "#1BB3FF"],
  },
  {
    name: "Lucas Santana",
    avatar: "/images/profile05.png",
    gradient: ["#fff433", "#Ffffff", "#9b58d0", "#000000"],
  },
  {
    name: "Maria Andrade",
    avatar: "/images/profile06.png",
    gradient: ["#d62e02", "#fd9855", "#ffffff", "#d161a2", "#a20160"],
  },
  {
    name: "Antonia Freitas",
    avatar: "/images/profile07.png",
    gradient: ["#fed900", "#9b58d0"],
  },
  {
    name: "Marcia Souza",
    avatar: "/images/profile08.png",
    gradient: ["#000000", "#a3a3a3", "#ffffff", "#800080", "#000000"],
  },
];

interface IContactItem {
  name: string;
  avatar: string;
  gradient: string[];
}

const ContactItem = ({ name, avatar, gradient }: IContactItem) => {
  return (
    <ContainerItemContact>
      <UserInformation>
        <ContainerImage>
          <ProfileGradient color={gradient} radius={10}>
            <Image src={avatar} alt="avatar" />
          </ProfileGradient>
        </ContainerImage>
        <Name>{name}</Name>
      </UserInformation>
      <Option>
        <FiMoreHorizontal size={20} color="#bbc4cf" />
      </Option>
    </ContainerItemContact>
  );
};

export const ContactList = () => {
  return (
    <Container>
      {users.map((user) => (
        <ContactItem
          avatar={user.avatar}
          name={user.name}
          gradient={user.gradient}
          key={user.name}
        />
      ))}
    </Container>
  );
};
