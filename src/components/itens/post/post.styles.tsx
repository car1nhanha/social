import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const ContainerItemContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerImage = styled.div`
  height: 40px;
  width: 40px;
  min-height: 40px;
  min-width: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Name = styled.p`
  margin: 0;
`;

export const DateText = styled.p`
  margin: 0;
  color: #bbc4cf;
  font-size: 10px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;
// body

export const BodyText = styled.p`
  margin: 0;
  color: #566b87;
  font-size: 14px;
  margin-top: 20px;
`;

export const ImagesContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;

  .wide {
    grid-column: span 2;
  }
  .tall {
    grid-row: span 2;
  }
  .big {
    grid-column: span 2;
    grid-row: span 2;
  }
`;
