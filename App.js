import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Saiba from "./src/pages/Saiba";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./src/style/Styles";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerActiveTintColor: 'black', drawerActiveBackgroundColor: '#d4a57b'
      }}>
        <Drawer.Screen name="Home" component={Home} options={{
          headerStyle: { backgroundColor: 'white' }
        }} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Saiba" component={Saiba} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
