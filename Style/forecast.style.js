import { StyleSheet } from "react-native";

const forecastStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  header_texts: {
    flex: 1,
    alignItems: "center",
    marginRight: 30,
  },
  subtitle: { fontSize: 15 },
  btn: {
    width: 30,
  },
  list: {
    marginTop: 50,
  },
});

export default forecastStyle;
