import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { router} from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Contador } from '../../components/contador';



export default function Contagem() {



  const handleFinish = (contador: {
    pontos: number;
    neutrofilos: number;
    monocitos: number;
    eosilofilos: number;
    basofilos: number;
    linfocitos_t: number;
    linfocitos_a: number;
  }) => {

    router.push({
      pathname: '../../pages/resultado_calculadora/',
      params: {
        pontos: contador.pontos,
        neutrofilos: contador.neutrofilos,
        monocitos: contador.monocitos,
        eosilofilos: contador.eosilofilos,
        basofilos: contador.basofilos,
        linfocitos_t: contador.linfocitos_t,
        linfocitos_a: contador.linfocitos_a,
      },
    });
  };

  return (
    <GestureHandlerRootView>

        <View style={style.container}>

            {/* <View style={style.background_square}></View> */}

            <View style={style.background_image_top}>
                <ImageBackground source={require('../../images/waves3.png')} style={style.image_top}/>
            </View>

            <View style={style.background_image_bottom}>
                <ImageBackground source={require('../../images/waves4.png')} style={style.image_bottom}/>
            </View>


            <View style={style.title_container}>
                <Text style={style.title}>Calculadora de Células</Text>
            </View>


                <Contador onFinish={handleFinish}/>


        </View>

    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background_image_top: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    height: '30%',
  },

  background_image_bottom: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: '30%',
    transform: [{ rotate: '180deg' }],
  },

  image_top: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.9,
    objectFit: 'cover',
  },

  image_bottom: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
    objectFit: 'cover',
  },


  title_container: {
    marginTop: '40%',
    // marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },


});

