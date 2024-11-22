import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Zoom from 'react-native-zoom-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Contador } from '../../components/contador';
import { fetchLaminaById } from '../../service/laminas'; // Ajuste o caminho conforme necessário
import { URL_ADIANTI } from '../../constants/global_constants';
import loading_styles from '../styles/loading_styles';

export default function Revisao() {
  const { lamina_id } = useLocalSearchParams(); // Obtém o ID da lâmina da URL
  const [lamina, setLamina] = useState<any>(null); // Estado para armazenar os dados da lâmina
  const [loading, setLoading] = useState<boolean>(true); // Estado para o indicador de carregamento
  const router = useRouter();

  useEffect(() => {
    const loadLamina = async () => {
      if (!lamina_id) {
        console.warn('Nenhum ID da lâmina foi fornecido!');
        setLoading(false);
        return;
      }

      try {
        const laminaData = await fetchLaminaById(Number(lamina_id)); // Busca os dados da lâmina
        setLamina(laminaData);
      } catch (error) {
        console.error('Erro ao buscar os dados da lâmina:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLamina();
  }, [lamina_id]);

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
      pathname: '../../pages/comparacao/',
      params: {
        lamina_id: lamina_id,
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

  if (loading) {
    return (
      <View style={loading_styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={loading_styles.loadingText}>Carregando dados da lâmina...</Text>
      </View>
    );
  }

  if (!lamina) {
    return (
      <View style={loading_styles.errorContainer}>
        <Text style={loading_styles.errorText}>Erro ao carregar a lâmina. Tente novamente mais tarde.</Text>
        <TouchableOpacity style={loading_styles.retryButton} onPress={() => router.push('/')}>
          <Text style={loading_styles.retryButtonText}>Voltar para a tela inicial</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={style.container}>
      
      <View style={style.background_square}></View>

      {/* <View style={style.background_circle}></View> */}

      <View style={style.title_container}>
        <Text style={style.title}>Revisão da Lâmina</Text>
        {/* <Text style={style.laminaInfo}>Lâmina ID: {lamina.id} - {lamina.nome}</Text> */}
      </View>

      <View style={style.imageContainer}>
        <Zoom
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        >
          <Image 
            source={{ uri: `${URL_ADIANTI}/${lamina.imagem}` }} // Carrega a imagem da lâmina
            style={style.imagem} 
          />
        </Zoom>
      </View>

      <Contador onFinish={handleFinish} />


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
  },

  background_circle: {
    position: 'absolute',
    top: '23%',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 100,
    backgroundColor: '#4CAF50',
    zIndex: -1,
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

  laminaInfo: {
    fontSize: 16,
    color: '#555',
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
