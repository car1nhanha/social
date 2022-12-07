import { CardNewFriend } from "../itens/cardNewFriend";
import { ContactList } from "../itens/contactList";
import { TitleCard } from "../itens/titleCard";
import { ListsContainer } from "./lists.styles";

const users = [
  {
    name: "Ana Julia",
    avatar: "/images/profile02.png",
    gradient: ["#FF1B8D", "#FFDA00", "#1BB3FF"],
  },
  {
    name: "Maria Eduarda",
    avatar: "/images/profile03.png",
    gradient: ["#5bcefa", "#f5a9b8", "#ffffff", "#f5a9b8", "#5bcefa"],
  },
];

export const Lists = () => {
  return (
    <ListsContainer>
      <TitleCard
        colorNotification="#1a77f2"
        notification={2}
        title="Requests"
        mt={0}
        mb={20}
      />

      {users.map((user) => (
        <CardNewFriend
          avatar={user.avatar}
          name={user.name}
          gradient={user.gradient}
          key={user.name}
        />
      ))}

      <TitleCard
        colorNotification="#abb9c8"
        notification={68}
        title="Contacts"
        mt={40}
        mb={20}
      />
      <ContactList />
    </ListsContainer>
  );
};
