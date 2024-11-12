import React from 'react';
import { Icon } from '@rneui/themed';
import { router} from 'expo-router';
import { style } from "./styles";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Imagem, useImageService } from '../services/imagens';
// import { useLaminaservice } from '../app/service/laminas';

import { 

  Text, 
  View,
  Button,
  TouchableOpacity

} from 'react-native';


export default function App() {

  const handlePress = () => {
    router.push("/pages/contagem")

  };

  const handleTeste = () => {
    router.push("/service/laminas")
  };

  return (
    <GestureHandlerRootView>
      
      <View style={style.body}>

        <View style={style.top_container}>
            {/* <Text>TOP DIV</Text> */}

            <View style={style.logo_container}>
              <Text>LOGO</Text>

            </View>
            <View style={style.title_container}>

                <Text style={style.title_text} >Boa Tarde!</Text>
                <Text>BioMedCells</Text>

              

            </View>

        </View>

        <View style={style.bottom_container}>

          {/* <Text>BOTTOM DIV</Text> */}
          <View style={style.buttons_container}>

            <View style={style.button_div}>

              <TouchableOpacity 
                
                style={style.button}
                onPress={handleTeste}
                >

                <Text>Atlas</Text>

              </TouchableOpacity>

            </View>

            <View style={style.button_div}>

              <TouchableOpacity style={style.button} onPress={handlePress}>
                <Text>Contagem de células</Text>

              </TouchableOpacity>

            </View>

            <View style={style.button_div}>

              <TouchableOpacity style={style.button} onPress={handlePress}>
                <Text>Liberação de laudo</Text>

              </TouchableOpacity>

            </View>

            <View style={style.button_div}>

              <TouchableOpacity style={style.button} onPress={handlePress}>
                <Text>Configurações</Text>

              </TouchableOpacity>

            </View>

            <View style={style.button_div}>

              <TouchableOpacity style={style.button} onPress={handlePress}>
                

              </TouchableOpacity>

            </View>
            

          </View>

        </View>

      </View>
    </GestureHandlerRootView>
  );
}


