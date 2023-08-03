/* 
Ce fichier va nous servir pour récupéré les donner de l'api et les stocker.
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
}
