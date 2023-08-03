import { Text, View } from "react-native";
import home from "../Style/home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "../api/meteo";
import Txt from "../Components/Txt";
import MeteoBasic from "../Components/MeteoBasic";
import { weatherInterpretation } from "../Services/meteo-service";

function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  //la structure ?. permet de faire une petite conditionnel qui retourne undefined si c'est faux
  //pour éviter que ça crash
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  //fonction pour récupéré la localisation de l'utilisateur
  async function getCoords() {
    //permet de demander l'autorisation d'avoir accès au téléphone
    //ici on récupère un statut
    let { status } = await requestForegroundPermissionsAsync();
    if (status == "granted") {
      //si on a l'autorisation on récupère la localisation du tel
      let location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      //si l'autorisation n'est pas donnée on se met automatiquement sur les coordonnées de Paris
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  //fonction pour récupérer les données de l'api météo
  async function fetchWeather(coordinates) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromcoord(coordinates);
    setWeather(weatherResponse);
  }

  return currentWeather ? (
    <>
      <View style={home.meteoBasic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city="Todo"
          interpretation={weatherInterpretation(currentWeather.weathercode)}
        />
      </View>

      <View style={home.searchBar}>
        <Text>input recherche</Text>
      </View>

      <View style={home.meteoAdvance}>
        <Text>meteo avancer</Text>
      </View>
    </>
  ) : null;
}
export default Home;
