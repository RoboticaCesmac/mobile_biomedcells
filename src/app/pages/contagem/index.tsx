import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { router} from 'expo-router';
import Zoom from 'react-native-zoom-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { style } from './styles';
import { Contador } from '../../components/contador';
import { fetchRandomLamina } from '../../service/laminas';
import loading_styles from '../styles/loading_styles';
import { URL_ADIANTI } from '../../constants/global_constants';

type Lamina = {

  id: string;
  imagem: string;

};

export default function Contagem() {

  const [lamina, setLamina] = useState<Lamina | null>(null);

  const loadRandomLamina = async () => {
    const randomLamina = await fetchRandomLamina();
    if (randomLamina) {
      setLamina(randomLamina);
    } else {
      Alert.alert('Erro', 'Nenhuma lâmina encontrada.');
    }
  };

  useEffect(() => {
    loadRandomLamina();
  }, []);

  if (!lamina) {
    return (
      <View style={loading_styles.loadingContainer}>
        <Text style={loading_styles.loadingText}>Carregando...</Text>
      </View>
    );
  }


  const handleFinish = (contador: {
    pontos: number;
    neutrofilos: number;
    monocitos: number;
    eosilofilos: number;
    basofilos: number;
    linfocitos_t: number;
    linfocitos_a: number;
  }) => {

    const lamina_id = lamina.id;

    router.push({
      pathname: '../../pages/resultado_contagem/',
      params: {
        lamina_id,
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

      <View style={style.background_square}></View>

      <View style={style.background_image_bottom}>
        <ImageBackground source={require('../../images/waves4.png')} style={style.image_bottom}/>
      </View>


      <View style={style.title_container}>
        <Text style={style.title}>Contagem de Células</Text>
      </View>

        <View style={style.imageContainer}>

          <Zoom style={{
            
            height: '100%',
            width: '100%',
            position: 'absolute',
            
            }}>

            <Image 
              source={{ uri: `${URL_ADIANTI}/${lamina.imagem}` }} 
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
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background_square: {
    width: Dimensions.get('window').width,
    height: '52.2%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    elevation: 10,
  },

  background_image_bottom: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: '30%',
    transform: [{ rotate: '180deg' }],
  },

  image_bottom: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.57,
    objectFit: 'cover',
  },


  title_container: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: 'black',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 20, // Para Android, sombra mais intensa
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 8 }, // Deslocamento mais pronunciado
    shadowOpacity: 0.5, // Aumentar opacidade da sombra
    shadowRadius: 10,
  },
  imagem: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
    // objectFit: 'contain',
  },

  

  

});

