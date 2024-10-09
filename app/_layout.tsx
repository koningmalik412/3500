import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { DatabaseProvider } from "./DatabaseContext";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.otf"),
    "Montserrat-BlackItalic": require("../assets/fonts/Montserrat-BlackItalic.otf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.otf"),
    "Montserrat-BoldItalic": require("../assets/fonts/Montserrat-BoldItalic.otf"),
    "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.otf"),
    "Montserrat-ExtraBoldItalic": require("../assets/fonts/Montserrat-ExtraBoldItalic.otf"),
    "Montserrat-ExtraLight": require("../assets/fonts/Montserrat-ExtraLight.otf"),
    "Montserrat-ExtraLightItalic": require("../assets/fonts/Montserrat-ExtraLightItalic.otf"),
    "Montserrat-Italic": require("../assets/fonts/Montserrat-Italic.otf"),
    "Montserrat-Light": require("../assets/fonts/Montserrat-Light.otf"),
    "Montserrat-LightItalic": require("../assets/fonts/Montserrat-LightItalic.otf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.otf"),
    "Montserrat-MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.otf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.otf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.otf"),
    "Montserrat-SemiBoldItalic": require("../assets/fonts/Montserrat-SemiBoldItalic.otf"),
    "Montserrat-Thin": require("../assets/fonts/Montserrat-Thin.otf"),
    "Montserrat-ThinItalic": require("../assets/fonts/Montserrat-ThinItalic.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <DatabaseProvider>
      <Stack>
        <Stack.Screen
          name="(login)"
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </DatabaseProvider>
  );
};

export default RootLayout;
