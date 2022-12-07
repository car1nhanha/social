import styled from "styled-components";

interface IImage {
  src: string;
  className?: "wide" | "tall" | "big";
}

export const ImageItem = ({ src, className }: IImage) => {
  return (
    <Figure className={className}>
      <ImageItemContainer src={src} />
    </Figure>
  );
};

const ImageItemContainer = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  display: inline-block;
  border-radius: 10px;
`;

const Figure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
