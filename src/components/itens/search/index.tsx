import { FiSearch } from "react-icons/fi";
import { ContainerInput, Input } from "./search.index";

export const Seach = () => {
  return (
    <ContainerInput>
      <FiSearch color="#a5afbf" size={15} />
      <Input type="text" placeholder="Search" />
    </ContainerInput>
  );
};
