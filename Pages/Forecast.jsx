import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { weatherInterpretation } from "../Services/meteo-service";
import forecastStyle from "../Style/forecast.style";
import { DAYS, dateToDDMM } from "../Services/date-service";
import Container from "../Components/Container";
import Txt from "../Components/Txt";
import ForecastListItem from "../Components/ForecastListItem";

function Forecast() {
  //les params de useRoute permet de récupéré les données passer en paramètre du .navigate
  const { params } = useRoute();
  const nav = useNavigation();

  const backButton = (
    //la fonction .goBack permet de revenir en arrière automatiquement
    <TouchableOpacity style={forecastStyle.btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={forecastStyle.header}>
      {backButton}
      <View style={forecastStyle.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={forecastStyle.subtitle}>Prévision pour 7 jours</Txt>
      </View>
    </View>
  );

  const forecastList = (
    <View style={forecastStyle.list}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = weatherInterpretation(code).image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const temperature = params.temperature_2m_max[index];

        return (
          <ForecastListItem
            key={time}
            image={image}
            day={day}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
export default Forecast;
