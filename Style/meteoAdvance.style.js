import { StyleSheet } from "react-native";
import Txt from "../Components/Txt";

export const advanceStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#00000043",
  },
});

//autre moyen de faire du style personnaliser quand on doit l'utiliser plusieurs fois
export function StyleLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
