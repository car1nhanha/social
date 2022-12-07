import { Profile } from "../itens/profile";
import {
  CardProfile,
  Item,
  ProfileDescription,
  ProfileTextContainer,
  ProfileUser,
  SidebarContainer,
} from "./sidebar.styles";

import { useState } from "react";
import {
  FiCalendar,
  FiHome,
  FiImage,
  FiSettings,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { Invitation } from "../itens/invitation";
import { TitleCard } from "../itens/titleCard";
import { Li, Ul } from "./sidebar.styles";

const options = [
  {
    icon: FiHome,
    text: "Home",
    href: "/",
  },
  {
    icon: FiUsers,
    text: "People",
    href: "/",
  },
  {
    icon: FiImage,
    text: "Photos",
    href: "/",
  },
  {
    icon: FiCalendar,
    text: "News Feed",
    href: "/",
  },
  {
    icon: FiUser,
    text: "Profile",
    href: "/",
  },
  {
    icon: FiSettings,
    text: "Settings",
    href: "/",
  },
];

export const Sidebar = () => {
  const [active, setActive] = useState("News Feed");

  return (
    <SidebarContainer>
      <CardProfile>
        <Profile size="medium" />
        <ProfileTextContainer>
          <ProfileUser>Alexandra Borke</ProfileUser>
          <ProfileDescription>alexsunshine</ProfileDescription>
        </ProfileTextContainer>
      </CardProfile>

      <Ul>
        {options.map((option, index) => (
          <Li
            key={index}
            onClick={() => setActive(option.text)}
            active={active === option.text}
          >
            <Item active={active === option.text}>
              <option.icon />
              <span>{option.text}</span>
            </Item>
          </Li>
        ))}
      </Ul>

      <TitleCard colorNotification="#f00" notification={4} title="INOVATIONS" />
      <Invitation />
    </SidebarContainer>
  );
};
