import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { router} from 'expo-router';
import Zoom from 'react-native-zoom-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { style } from './styles';
import { Contador } from '../../components/contador';



export default function Contagem() {

  const handleFinish = (contador: Contador) => {
    Alert.alert('Resultado', `
        Pontos: ${contador.pontos}
        Celula 1: ${contador.celula1}
        Celula 2: ${contador.celula2}
        Celula 3: ${contador.celula3}
        Celula 4: ${contador.celula4}
        Celula 5: ${contador.celula5}
        Celula 6: ${contador.celula6}
        `)
  }

  return (
    <GestureHandlerRootView>

      <View style={style.container}>

        <View style={style.imageContainer}>

          <Zoom style={{
            
            height: '100%',
            width: '100%',
            // height: 400,
            // height: Dimensions.get('window').width * 0.75,  
            // backgroundColor:'red'
            
            }}>

            <Image 
              source={require('../../images/image.png')} 
              style={style.imagem} 
            />

          </Zoom>


        </View>

        <Contador onFinish={handleFinish}/>


      </View>

    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
    
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: 'grey',
    gap: 10,
  },

  

  imageContainer:{
    marginTop: 40,
    borderRadius: 25,
    width: '70%',
    height: '35%',
    // backgroundColor: 'black',
  },

  imagem: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.75,      
    // aspectRatio: 1,         
    // resizeMode: 'contain',
    marginTop: '10%',
    // backgroundColor: 'green',
  },

  contadorContainer: {
    height: '60%',
    width: '100%',
    // backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 5,

  },

  contadorText: {
    textAlign: 'center',
    height: '5%',
    width: '50%',
    fontSize: 20,
    // backgroundColor: 'purple',
  },

  
  buttons_container: {
    // position: 'relative',
    padding: '2%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    // alignItems: 'flex-end',
    alignContent: 'center',
    height: '55%',
    width: '80%',
    // backgroundColor: 'green',
  },

  buttons: {
    height: '23%',
    width: '45%',
    backgroundColor: '#86fa8f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  actions_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '15%',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
    // backgroundColor: 'red',
  },

  actions:{
    height: '60%',
    width: '40%',
    backgroundColor: '#55a05b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

});

