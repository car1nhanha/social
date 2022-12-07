import { Status } from "./component";
import { StatusGridContainer } from "./status.styles";

const status = [
  {
    name: "Pedro Monteiro",
    background: "/story/story01.jpg",
    avatar: "/images/profile04.png",
  },
  {
    name: "Lucas Santana",
    background: "/story/story02.jpg",
    avatar: "/images/profile05.png",
  },
  {
    name: "Maria Andrade",
    background: "/story/story03.jpg",
    avatar: "/images/profile06.png",
  },
  {
    name: "Antonia Freitas",
    background: "/story/story04.jpg",
    avatar: "/images/profile07.png",
  },
  {
    name: "Marcia Souza",
    background: "/story/story05.jpg",
    avatar: "/images/profile08.png",
  },
];

export const StatusGrid = () => {
  return (
    <StatusGridContainer>
      {status.map((item) => (
        <Status
          key={item.name}
          backgroundImage={item.background}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </StatusGridContainer>
  );
};
