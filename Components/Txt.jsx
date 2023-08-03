import txtStyle from "../Style/txt.style";
import { Text } from "react-native";

function Txt({ children, style }) {
  return <Text style={[txtStyle.text, style]}>{children}</Text>;
}
export default Txt;
