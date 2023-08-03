import { StyleSheet } from "react-native";

const mBasic = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  temperature_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temperature: {
    fontSize: 100,
  },
  img: {
    height: 90,
    width: 90,
  },
});

export default mBasic;
