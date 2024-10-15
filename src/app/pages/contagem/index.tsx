import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { router} from 'expo-router';
import Zoom from 'react-native-zoom-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { style } from './styles';

export type Contador = {
  pontos: number,
  celula1: number,
  celula2: number,
  celula3: number,
  celula4: number,
  celula5: number,
  celula6: number,
}

export interface ContadorProps {
  onFinish: (contador: Contador) => void
}

export default function Contador() {
  const [ contador, setContador ] = React.useState<Contador>({
    pontos: 0,
    celula1: 0,
    celula2: 0,
    celula3: 0,
    celula4: 0,
    celula5: 0,
    celula6: 0,
})

  const goToHome = () => {
    router.push("../../")

  };

  const handleFinish = () => {
    router.push({
      pathname: '/resultados',
      params: {
        pontos: contador.pontos,
        celula1: contador.celula1,
        celula2: contador.celula2,
        celula3: contador.celula3,
        celula4: contador.celula4,
        celula5: contador.celula5,
        celula6: contador.celula6,
      },
    });
  };

  // Função para incrementar o contador
  const adicionar = async (celula:'tipo1'|'tipo2'|'tipo3'|'tipo4'|'tipo5'|'tipo6') => {
    //Busca os valores atuais do estado
    let { pontos, celula1, celula2, celula3, celula4, celula5, celula6 } = contador;

    if (celula == 'tipo1') {
        celula1++
    } 
    else if (celula == 'tipo2') 
    {
        celula2++
    } 
    else if (celula == 'tipo3') 
    {
        celula3++
    } 
    else if (celula == 'tipo4') 
    {
        celula4++
    } 
    else if (celula == 'tipo5') 
    {
        celula5++
    } 
    else
    {
        celula6++
    } 

    pontos ++

    //Atualiza os valores
    setContador({ pontos, celula1, celula2, celula3, celula4, celula5, celula6 })
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

        <Text style={style.contadorText}>Contador: {contador.pontos}</Text>

        <View style={style.buttons_container}>
          
          <TouchableOpacity 
              style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
              onPress={() => adicionar('tipo1')}
              disabled={contador.pontos >= 100}
          >
            <Text>cel 01</Text>

          </TouchableOpacity>

          <TouchableOpacity 
              style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
              onPress={() => adicionar('tipo2')}
              disabled={contador.pontos >= 100}
          >
            <Text>cel 02</Text>

          </TouchableOpacity>

          <TouchableOpacity 
              style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
              onPress={() => adicionar('tipo3')}
              disabled={contador.pontos >= 100}
          >
            <Text>cel 03</Text>

          </TouchableOpacity>


          <TouchableOpacity 
              style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
              onPress={() => adicionar('tipo4')}
              disabled={contador.pontos >= 100}
          >
            <Text>cel 04</Text>

          </TouchableOpacity>

          <TouchableOpacity 
              style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
              onPress={() => adicionar('tipo5')}
              disabled={contador.pontos >= 100}
          >
            <Text>cel 05</Text>

          </TouchableOpacity>


          <TouchableOpacity 
              style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
              onPress={() => adicionar('tipo6')}
              disabled={contador.pontos >= 100}
          >
            <Text>cel 06</Text>

          </TouchableOpacity>


        </View>

        <View style={style.actions_container}>

          <TouchableOpacity style={[style.actions, contador.pontos < 100 && { opacity: 0.5 }]} disabled={contador.pontos < 100} onPress={handleFinish}>
            <Text>Finalizar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.actions}  onPress={goToHome}>
            <Text>Voltar</Text>
          </TouchableOpacity>

        </View>

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

  contadorText: {
    textAlign: 'center',
    height: '5%',
    width: '50%',
    fontSize: 20,
    // backgroundColor: 'purple',
  },

  buttons_container: {
    // position: 'relative',
    padding: '5%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    // alignItems: 'flex-end',
    alignContent: 'center',
    height: '25%',
    width: '90%',
    // backgroundColor: 'green',
  },

  buttons: {
    height: '30%',
    width: '40%',
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
    height: '10%',
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

