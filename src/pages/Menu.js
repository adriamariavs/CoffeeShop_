import { View, Image, Text } from "react-native";
import { styles } from "../style/Styles";
import { useNavigation } from "@react-navigation/native";
//Importando Componentes:
import ButtonComponents from "../componentes/ButtonComponents";
import TextComponent from "../componentes/TextComponent";
import ImgComponent from "../componentes/ImgComponent";

import Carousel from "react-native-snap-carousel";

import carrossel_1 from "../assets/image/carrossel_1.png";
import carrossel_2 from "../assets/image/carrossel_2.png";
import carrossel_3 from "../assets/image/carrossel_3.png";

const data = [
  {
    imgUrl: carrossel_1,
  },
  {
    imgUrl: carrossel_2,
  },
  {
    imgUrl: carrossel_3,
  },
];

function CarouselCardItem({ item }) {
  return (
    <View style={{ 
      height: 300, 
      width: '100%', 
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 5,
      backgroundColor: 'white',
    }}> 
      <View style={{ flexDirection: 'row', height: '100%', width: '100%', padding: 10, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text>Um texto qualquer</Text>
        <Image style={{ width: '50%', height: '100%', resizeMode: 'contain', marginTop: -300 }} source={require("../assets/image/logo.png")} />
      </View>
    </View>
  );
}


export default function Menu() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}></View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15}}>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={390}
        itemWidth={390}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        layout={"dafult"}
        layoutCardOffset={`9`}
      />
      </View>
      
      <View style={{ height: 300, backgroundColor: "black" }}>
      <Image style={{ width: 100, height: 100, resizeMode: 'cover', position: 'relative', top: -15}} source={require("../assets/image/logo.png")} />
      </View>
      
    </View>
  );
}
