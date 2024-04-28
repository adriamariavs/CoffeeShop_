import { View, Text, TextInput } from "react-native"
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
//Importando componentes:
import ButtonComponents from "../componentes/ButtonComponents";

export default function Login() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
          <Text style={styles.Login}>Login</Text>
  
          <TextInput style={styles.InputName} placeholder="E-mail" />
          <TextInput
            style={styles.InputName}
            placeholder="Senha"
            secureTextEntry={true}
          />
  
          <ButtonComponents
            estilo={styles.BtnLogin}
            onpress={() => alert("hello")}
            title="ENTRAR"
          />
  
          <ButtonComponents
            estilo={styles.BtnCds}
            onPress={() => navigation.navigate("Cadastro")}
            title="Cadastre-se aqui!"
          />
          </View>
    );
  }