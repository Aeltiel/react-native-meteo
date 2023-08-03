import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import appStyle from "./Style/app.style";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import BackgroundImg from "./assets/background.png";
import Home from "./Pages/Home";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  return (
    <ImageBackground
      source={BackgroundImg}
      style={appStyle.img}
      imageStyle={appStyle.imgOpacity}
    >
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          {isFontLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
