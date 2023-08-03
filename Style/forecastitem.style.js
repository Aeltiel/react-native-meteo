import { StyleSheet } from "react-native";

const fListItem = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  day: { fontSize: 15 },
  date: { fontSize: 15 },
  temperature: { width: 50, textAlign: "right" },
});

export default fListItem;
