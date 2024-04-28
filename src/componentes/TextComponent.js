import { Text } from "react-native";
import { styles } from "../style/Styles";

export default function TextComponent({ texto, style }) {
  return <Text style={style}>{texto}</Text>;
}