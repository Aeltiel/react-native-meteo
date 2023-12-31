/* 
Ce fichier va nous servir pour récupéré les donner de l'api meteo et de ville et les stocker.
en fait on fait le fetch ici, plutot que dans le home par exemple
*/
import axios from "axios";

export class MeteoAPI {
  //le static permet de ne pas faire une nouvelle classe de meteo API
  static async fetchWeatherFromcoord(coords) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityFromcoord(coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data;
    return city || village || town;
  }

  static async fetchCoordsFromCity(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`
        )
      ).data.results[0];
      return { lat, lng };
    } catch (error) {
      throw "Pas de coordonées trouvées, pour la recherche : " + city;
    }
  }
}
