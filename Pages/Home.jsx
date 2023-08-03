import { Text, View } from "react-native";
import home from "../Style/home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "../api/meteo";
import { weatherInterpretation } from "../Services/meteo-service";
import MeteoBasic from "../Components/MeteoBasic";
import MeteoAdvance from "../Components/MeteoAdvance";

function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  //la structure ?. permet de faire une petite conditionnel qui retourne undefined si c'est faux
  //pour éviter que ça crash
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
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

  //fonction pour récupéré les données de l'api qui retourne la ville en fonction des coordonné
  async function fetchCity(coordinates) {
    const cityResponse = await MeteoAPI.fetchCityFromcoord(coordinates);
    setCity(cityResponse);
  }

  return currentWeather ? (
    <>
      <View style={home.meteoBasic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={weatherInterpretation(currentWeather.weathercode)}
        />
      </View>

      <View style={home.searchBar}>
        <Text>input recherche</Text>
      </View>

      <View style={home.meteoAdvance}>
        <MeteoAdvance
          vent={currentWeather.windspeed}
          aube={weather.daily.sunrise[0].split("T")[1]}
          crepuscule={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </>
  ) : null;
}
export default Home;
