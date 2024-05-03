import { View, Text, TextInput } from "react-native"
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
//Importando componentes:
import ButtonComponents from "../componentes/ButtonComponents";

export default function Login() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.TelaLogin}> 

        <Text style={styles.Welcome}>Seja bem-vindo!</Text>
  
  <TextInput style={styles.InputName} placeholder="E-mail" />
  <TextInput
    style={styles.InputName}
    placeholder="Senha"
    secureTextEntry={true}
  />

  <ButtonComponents
    styles={[styles.BtnLogin, {marginTop: 20}]}
    onPress={() => navigation.navigate("Menu")}
    title="Login"
  />

        </View>
        
          </View>
    );
  }