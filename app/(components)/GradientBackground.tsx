import React, { ReactNode } from "react";
import { View } from "react-native";
import { styled } from "nativewind";
import Svg, { Defs, RadialGradient, Stop, Circle } from "react-native-svg";

interface GradientBackgroundProps {
  children: ReactNode; // Defines the type for the children prop
}

const StyledView = styled(View);

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <StyledView className="flex-1 relative bg-purple">
      <Svg height="600" width="400" style={{ position: "absolute" }}>
        <Defs>
          <RadialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="#1EA4C1" stopOpacity="0.5" />
            <Stop offset="100%" stopColor="#1EA4C1" stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Circle cx="400" cy="0" r="70%" fill="url(#grad1)" />
      </Svg>
      <Svg
        height="900"
        width="400"
        style={{ position: "absolute", bottom: "0%" }}
      >
        <Defs>
          <RadialGradient
            id="grad2"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="#AB4EBA" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="#AB4EBA" stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Circle cx="0" cy="900" r="50%" fill="url(#grad2)" />
      </Svg>
      <StyledView className="absolute inset-0 w-full h-full">
        {children}
      </StyledView>
    </StyledView>
  );
};

export default GradientBackground;
