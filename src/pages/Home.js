import { View } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
//Importando Componentes:
import ButtonComponents from "../componentes/ButtonComponents";
import TextComponent from "../componentes/TextComponent";
import ImgComponent from "../componentes/ImgComponent";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImgComponent style={styles.ImgLogo} imagem={require("../image/logo.png")}/>
      <TextComponent texto="Obter o melhor café da cidade?" styles={styles.TextHome}/>

      <View style={{flexDirection: 'row'}}>
   <ButtonComponents
              styles={styles.BtnLoginHome}
              onPress={() => navigation.navigate("Login")}
              title= "LOGIN"
              />
              
              <ButtonComponents
              styles={styles.BtnCdsHome}
              onPress={() => navigation.navigate("Cadastro")}
              title= "Cadastrar-se"
              />

            
      </View>
      <ButtonComponents
              styles={styles.BtnSaiba}
              onPress={() => navigation.navigate("Saiba")}
              title= "Saiba mais!"
              />
         
    </View>
  );
}