import { TextInput } from "react-native";
import sBStyle from "../Style/searchBar.style";

function SearchBar({ onSubmit }) {
  return (
    <TextInput
      style={sBStyle.input}
      //(e) => onSubmit(e.nativeEvent.text) permet de renvoyer directement le text de l'input
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      placeholder="Cherche une ville"
    />
  );
}

export default SearchBar;
