import React from 'react';
import { Icon } from '@rneui/themed';
import { StyleSheet, Image , Dimensions} from "react-native";
import { router} from 'expo-router';
// import { style } from "./styles";
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

  const handleContagem = () => {
    router.push("/pages/contagem")

  };

  const handleAtlas = () => {
    router.push("/pages/atlas")
  };

  const handleLaudo = () => {
    router.push("/pages/laudo")
  };

  return (
    <GestureHandlerRootView>
      
      <View style={style.body}>

        <View style={style.top_container}>
            {/* <Text>TOP DIV</Text> */}

            {/* <Image style={style.background_image} source={require('../app/images/background_image2.png')}/> */}

            <View style={style.logo_container}>
            <Image style={style.logo_image} source={require('../app/images/logo_preta.png')}/>

            </View>
            <View style={style.title_container}>

                <Text style={style.title_text} >BioMedCells</Text>
                <Text style={style.subtitle_text}>Bem vindo!</Text>

              

            </View>

        </View>

        <View style={style.bottom_container}>

          {/* <Text>BOTTOM DIV</Text> */}
          <View style={style.buttons_container}>

            <View style={style.button_div}>

              <TouchableOpacity style={style.button} onPress={handleAtlas}>

                <Image style={style.icon} source={require('../app/images/atlas.png')}/>
                <Text style={style.button_text}>Atlas</Text>

              </TouchableOpacity>

            </View>

            <View style={style.button_div}>

            <TouchableOpacity style={style.button} onPress={handleContagem}>

              <Image style={style.icon} source={require('../app/images/contagem.png')}/>
              <Text style={style.button_text}>Contagem de células</Text>

            </TouchableOpacity>

            </View>

            <View style={style.button_div}>

            <TouchableOpacity style={style.button} onPress={handleLaudo}>

              <Image style={style.icon} source={require('../app/images/laudo.png')}/>
              <Text style={style.button_text}>Revisão de Laudo</Text>

            </TouchableOpacity>

            </View>

            <View style={style.button_div}>

            <TouchableOpacity style={style.button} onPress={handleAtlas}>

              <Image style={style.icon} source={require('../app/images/configuracoes.png')}/>
              <Text style={style.button_text}>Configurações</Text>

            </TouchableOpacity>

            </View>


          </View>

        </View>

      </View>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({

  body: {
      flex: 1,
      backgroundColor: '#4CAF50',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: "100%",
  },

  background_image: {
    width: 700,
    height: 700,
    // backgroundColor: 'red',
    // objectFit: 'cover',
    resizeMode: 'cover',
    // transform: [{ rotate: '90deg' }],
    zIndex: -1,
    
  },

  top_container: {
      display: 'flex',
      flexDirection: 'row-reverse',
      height: 200,
      width: "100%",
      // backgroundColor: 'blue',
      // alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 90,

  },

  bottom_container: {
      marginBottom: 0,
      height: "55%",
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 10,

  },

  buttons_container: {
      height: '90%',
      width: '85%',
      // backgroundColor: 'red',
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
  },

  button_div: {
      height: '20%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },

  button: {
      height: '90%',
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 25,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      elevation: 10,
  },

  icon: {
    height: 35,
    width: 35,
    marginRight: 20,
    marginLeft: 20,
  },

  button_text: {
    fontSize: 18,
    fontWeight: 'heavy',
  },

  logo_container: {

      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      width: 90,
      // backgroundColor: 'grey',
      borderRadius: 50,
      marginRight: 20,

  },

  logo_image: {
    height: '100%',
    width: '100%',
    borderRadius: 50,

  },


  title_container: {
      display: 'flex',
      flexDirection: 'column',
      height: 50,
      width: 200,
      // backgroundColor: 'purple',
      marginLeft: 20,
      alignSelf: 'center',
      alignItems: 'flex-start',
      justifyContent: 'center',
      
  },

  title_text: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff'
  },

  subtitle_text: {
    fontSize: 22,
    fontWeight: '800',
    color: '#eaeaea',
  },


});
