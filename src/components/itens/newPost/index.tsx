import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { Button } from "../button";
import { Profile } from "../profile";
import { Input, NewPostContainer } from "./newPost.styles";

export const NewPost = () => {
  const [rows, setRows] = useState(1);
  const [text, setText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const rows = value.split("\n").length;

    setText(value);
    setRows(rows < 3 ? rows : 3);
  };

  return (
    <NewPostContainer>
      <Profile />
      <Input
        placeholder="O que você está pensando?"
        rows={rows}
        value={text}
        onChange={handleInput}
      />
      <Button color="blue" size="large">
        <FiLink size={14} />
        <span>Postar</span>
      </Button>
    </NewPostContainer>
  );
};
