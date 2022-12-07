import { NewPost } from "../itens/newPost";
import { Post } from "../itens/post";
import { StatusGrid } from "../itens/status";
import { TimelineContainer } from "./timeline.styles";

export const Timeline = () => {
  return (
    <TimelineContainer>
      <StatusGrid />
      <NewPost />
      <Post />
    </TimelineContainer>
  );
};
