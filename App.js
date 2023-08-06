import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import Constants from "expo-constants";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  //fonction pour demander l'autorisation de récup le token et donc d'envoyer des notification
  async function subscribeNotif() {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas?.projectId,
      });
      console.log(token);
      // Envoi du token a notre serveur
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  }
  useEffect(() => {
    //pour voir ce qu'il y a dans le data de la notif
    /*Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("data", response.notification.request.content.data);
    });*/
    subscribeNotif();
  }, []);
  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoaded ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
