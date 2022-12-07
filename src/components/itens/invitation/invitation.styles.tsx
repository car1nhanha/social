import styled from "styled-components";

export const InvitationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const OutDoor = styled.div`
  background-image: url("https://i.pinimg.com/564x/0e/72/65/0e7265149a8ce02b2be060a2483f1180.jpg");
  background-size: cover;
  background-position: center;
  height: 18rem;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContainerImageProfile = styled.div`
  background-color: #fff;
  border-radius: 7px;
  padding: 2px;
  width: 50px;
  height: 50px;
`;

export const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
