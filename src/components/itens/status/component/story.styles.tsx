import styled from "styled-components";

interface StatusContainerProps {
  backgroundImage: string;
}

export const StatusContainer = styled.div<StatusContainerProps>`
  width: 18%;
  height: 200px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.08);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
  }
`;

// image
export const ImageContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  height: 50px;
  width: 50px;
  padding: 2px;
`;

export const StatusImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

// text
export const StatusName = styled.p`
  color: #fff;
  font-size: 20px;
  margin: 0;
  text-align: center;
  width: 100%;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
