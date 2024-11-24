import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView ,ImageBackground, Dimensions, ActivityIndicator, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Zoom from 'react-native-zoom-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Contador } from '../../components/contador';
import { fetchLaminaById } from '../../service/laminas';
import { URL_ADIANTI } from '../../constants/global_constants';
import loading_styles from '../styles/loading_styles';

export default function Revisao() {
  const { lamina_id } = useLocalSearchParams();
  const [lamina, setLamina] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [observacao, setObservacao] = useState('');
  const router = useRouter();
  const [contador, setContador] = useState<any>(null);

  useEffect(() => {
    const loadLamina = async () => {
      if (!lamina_id) {
        console.warn('Nenhum ID da lâmina foi fornecido!');
        setLoading(false);
        return;
      }

      try {
        const laminaData = await fetchLaminaById(Number(lamina_id));
        setLamina(laminaData);
      } catch (error) {
        console.error('Erro ao buscar os dados da lâmina:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLamina();
  }, [lamina_id]);

  const handleFinish = (novoContador: any) => {
    setContador(novoContador); // Salva o contador no estado
    setModalVisible(true); // Abre o modal
  };

  const handleSubmitObservacao = (observacao: string) => {
    if (!contador) {
      console.warn('O contador não foi definido.');
      return;
    }
  
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
        observacao: observacao, // Incluindo a observação do usuário
      },
    });
  
    setModalVisible(false); // Fecha o modal
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

        <View style={style.background_image_bottom}>
          <ImageBackground source={require('../../images/waves4.png')} style={style.image_bottom}/>
        </View>

        <View style={style.title_container}>
          <Text style={style.title}>Revisão da Lâmina</Text>
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
              source={{ uri: `${URL_ADIANTI}/${lamina.imagem}` }}
              style={style.imagem}
            />
          </Zoom>
        </View>

        <Contador onFinish={handleFinish} />

        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={modalStyles.overlay}>
            <View style={modalStyles.modalContainer}>
              <Text style={modalStyles.modalTitle}>Adicionar Observação</Text>
              <TextInput
                style={modalStyles.input}
                placeholder="Digite sua observação aqui..."
                placeholderTextColor="#888"
                value={observacao}
                onChangeText={setObservacao}
              />
              <View style={modalStyles.buttonContainer}>
                <TouchableOpacity
                  style={modalStyles.buttonConfirm}
                  onPress={() => handleSubmitObservacao(observacao)} // Passa a observação como string
                >
                  <Text style={modalStyles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  imagem: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
});

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContainer: {
    width: Dimensions.get('window').width * 0.85,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCancel: {
    flex: 1,
    backgroundColor: '#f44336',
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonConfirm: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
