import { View } from "react-native";
import { StyleLabel, advanceStyle } from "../Style/meteoAdvance.style";
import Txt from "./Txt";

function MeteoAdvance({ aube, crepuscule, vent }) {
  return (
    <View style={advanceStyle.container}>
      <View style={{ alignItems: "center" }}>
        <Txt>{aube}</Txt>
        <StyleLabel>Aube</StyleLabel>
      </View>

      <View style={{ alignItems: "center" }}>
        <Txt>{crepuscule}</Txt>
        <StyleLabel>Crépuscule</StyleLabel>
      </View>

      <View style={{ alignItems: "center" }}>
        <Txt>{vent} km/h</Txt>
        <StyleLabel>Vent</StyleLabel>
      </View>
    </View>
  );
}

export default MeteoAdvance;
