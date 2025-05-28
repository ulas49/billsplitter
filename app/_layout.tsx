import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {useFonts} from "expo-font"
import "./global.css";

export default function RootLayout() {
  const [loaded,error] = useFonts({
    'mont-light' : require("../assets/fonts/Montserrat-Light.ttf"),
    'mont-regular' : require("../assets/fonts/Montserrat-Regular.ttf"),
    'mont-medium' : require("../assets/fonts/Montserrat-Medium.ttf"),
    'mont-semibold' : require("../assets/fonts/Montserrat-SemiBold.ttf"),
    'mont-bold' : require("../assets/fonts/Montserrat-Bold.ttf")

  })

 
  return (
  <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </SafeAreaProvider>

  
  );
}
