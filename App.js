import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import appStyle from "./Style/app.style";
import BackgroundImg from "./assets/background.png";
import Home from "./Pages/Home";

export default function App() {
  return (
    <ImageBackground
      source={BackgroundImg}
      style={appStyle.img}
      imageStyle={appStyle.imgOpacity}
    >
      <SafeAreaProvider>
        <SafeAreaView style={appStyle.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
