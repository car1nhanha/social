import { ProfileGradientContainer } from "./profileGradient.style";

interface profileGradientProps {
  color: string[];
  children: React.ReactNode;
  radius?: number;
}

export const ProfileGradient = ({
  color,
  children,
  radius,
}: profileGradientProps) => {
  return (
    <ProfileGradientContainer color={color} radius={radius}>
      {children}
    </ProfileGradientContainer>
  );
};
