import { Image, View } from "react-native";
import fListItem from "../Style/forecastitem.style";
import Txt from "./Txt";

function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={fListItem.container}>
      <Image style={fListItem.img} source={image} />
      <Txt style={fListItem.day}>{day}</Txt>
      <Txt style={fListItem.date}>{date}</Txt>
      <Txt style={fListItem.temperature}>{temperature}°</Txt>
    </View>
  );
}
export default ForecastListItem;
