import { Text, View } from "react-native";
import home from "../Style/home.style";

function Home() {
  return (
    <>
      <View style={home.meteoBasic}>
        <Text>meteo basic</Text>
      </View>

      <View style={home.searchBar}>
        <Text>input recherche</Text>
      </View>

      <View style={home.meteoAdvance}>
        <Text>meteo avancer</Text>
      </View>
    </>
  );
}
export default Home;
