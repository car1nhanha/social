import { ProfileGradient } from "../profileGradient";
import { Image, ProfileContainer } from "./profile.style";

interface ProfileProps {
  size?: "small" | "medium" | "large";
}

export const Profile = ({ size = "small" }: ProfileProps) => {
  return (
    <ProfileContainer size={size}>
      <ProfileGradient
        color={[
          "#FF0018",
          "#FFA52C",
          "#FFFF41",
          "#008018",
          "#0000F9",
          "#86007D",
        ]}
      >
        <Image src="/images/user.png" alt="avatar" />
      </ProfileGradient>
    </ProfileContainer>
  );
};
