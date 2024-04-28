import { View, ScrollView } from "react-native";
import { styles } from "../style/Styles";
import TextComponent from "../componentes/TextComponent";
import ButtonComponents from "../componentes/ButtonComponents";
import ImgComponent from "../componentes/ImgComponent";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
      <ImgComponent style={styles.ImgLogo} imagem={require("../image/logo.png")}/>
            <ButtonComponents
              estilo={styles.BtnLogin_Home}
              onPress={() => navigation.navigate("Login")}
              title="LOGIN"
              />
          </ScrollView>
    </View>
  );
}