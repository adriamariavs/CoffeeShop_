import { TouchableOpacity, Text } from "react-native";
import { styles } from "../style/Styles";

export default function ButtonComponents({ estilo, onPress, title}) {
  return (
    <TouchableOpacity style={estilo} onPress={onPress}> 
      <Text>{title}</Text> 
    </TouchableOpacity>
  );
}