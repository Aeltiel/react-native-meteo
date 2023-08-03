import { Image, View } from "react-native";
import Txt from "./Txt";
import mBasic from "../Style/meteoBasic.style";
import Clock from "./Clock";

function MeteoBasic({ temperature, city, interpretation }) {
  return (
    <>
      <View style={mBasic.clock}>
        <Clock />
      </View>

      <Txt>{city}</Txt>

      <Txt style={mBasic.label}>{interpretation.label}</Txt>

      <View style={mBasic.temperature_container}>
        <Txt style={mBasic.temperature}>{temperature}°</Txt>
        <Image style={mBasic.img} source={interpretation.image} />
      </View>
    </>
  );
}
export default MeteoBasic;
