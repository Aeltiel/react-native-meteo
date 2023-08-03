import txtStyle from "../Style/txt.style";
import { Text, useWindowDimensions } from "react-native";

function Txt({ children, style }) {
  //const nécessaire pour faire une font reponsive en prenant le height du tel et
  //en calculant la base (0.00123) à partir de mon propre tel en faisant 1/height
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || txtStyle.text.fontSize;
  return (
    <Text
      style={[txtStyle.text, style, { fontSize: fontSize * 0.00123 * height }]}
    >
      {children}
    </Text>
  );
}
export default Txt;
