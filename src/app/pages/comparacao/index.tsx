import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions , TouchableOpacity, ActivityIndicator, ScrollView, ImageBackground, TextInput} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchLaminaById } from '../../service/laminas';
import { router } from 'expo-router';
import loading_styles from '../styles/loading_styles';

interface RouteParams {
  lamina_id: number;
  pontos: number;
  neutrofilos: number;
  monocitos: number;
  eosilofilos: number;
  basofilos: number;
  linfocitos_t: number;
  linfocitos_a: number;
  observacao: string;
}

type Lamina = {
  
  id: number;
  nome: string;
  neutrofilo_relativo: number;
  monocito_relativo: number;
  eosilofilo_relativo: number;
  basofilo_relativo: number;
  linfocito_t_relativo: number;
  linfocito_a_relativo: number;
  blastos_relativo: number;

  hemacias: number;
  hemoglobina: number;
  hematocrito: number;
  volume_corp_medio: number;
  hemoglobina_corp_medio: number;
  concentracao_hemoglobina: number;
  rdw: number;
  plaquetas: number;

  observacao: string;

};


export default function Comparacao() {
  const route = useRoute();
  const { lamina_id ,pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a , observacao} = route.params as RouteParams;
  const [lamina, setLamina] = useState<any>(null); // Estado para armazenar os dados da lâmina
  const [loading, setLoading] = useState<boolean>(true); // Estado para o indicador de carregamento
  const [userObservation, setUserObservation] = useState<string>('');

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


  const goToHome = () => {
    router.push("../../");
  };

  // Função para calcular a porcentagem
  const calcularPorcentagem = (valor: number, total: number) => {
    return total > 0 ? ((valor / total) * 100).toFixed(2) : '0.00';
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.container_elements}>

      <View style={styles.background_image_top}>
        <ImageBackground source={require('../../images/waves3.png')} style={styles.image_top}/>
      </View>

      <View style={styles.background_image_bottom}>
        <ImageBackground source={require('../../images/waves2.png')} style={styles.image_bottom}/>
      </View>

      <Text style={styles.title}>Revisão de laudo</Text>

      {/* Tabela de resultados */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Células</Text>
          <Text style={styles.cellHeader}>Contagem</Text>
          <Text style={styles.cellHeader}>Lâmina</Text>
        </View>

        {/* Célula 1 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Neutrofilos</Text>
          <Text style={styles.cell}>
            {neutrofilos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.neutrofilo_relativo}</Text>
        </View>

        {/* Célula 2 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Monocitos</Text>
          <Text style={styles.cell}>
            {monocitos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.monocito_relativo}</Text>
        </View>

        {/* Célula 3 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Eosilofilos</Text>
          <Text style={styles.cell}>
            {eosilofilos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.eosilofilo_relativo}</Text>
        </View>

        {/* Célula 4 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Basofilos</Text>
          <Text style={styles.cell}>
            {basofilos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.basofilo_relativo}</Text>
        </View>

        {/* Célula 5 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Linfocitos .T</Text>
          <Text style={styles.cell}>
            {linfocitos_t}
          </Text>
          <Text style={styles.cellResultado}>{lamina.linfocito_t_relativo}</Text>
        </View>

        {/* Célula 6 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Linfocito A.</Text>
          <Text style={styles.cell}>
            {linfocitos_a}
          </Text>
          <Text style={styles.cellResultado}>{lamina.linfocito_a_relativo}</Text>
        </View>

        {/* Total de pontos */}
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Total de Pontos</Text>
          <Text style={styles.cellHeader}>{pontos}</Text>
          {/* <Text style={styles.cellHeader}>100%</Text> */}
        </View>
      </View>

      {/* Observações */}
      <View style={styles.observationsContainer}>
        <Text style={styles.observationsTitle}>Observação do Laudo</Text>
        <View style={styles.nonEditableObservation}>
          <Text>{lamina.observacao || 'Nenhuma observação disponível.'}</Text>
        </View>

        <Text style={styles.observationsTitle}>Suas Observações</Text>
        <View style={styles.nonEditableObservation}>
          <Text>{observacao}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.actions} onPress={goToHome}>
        <Text style={styles.button_text}>Finalizar</Text>
      </TouchableOpacity>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: Dimensions.get('window').height,
    // height: '100%',
    // width: Dimensions.get('window').width,
    // justifyContent: 'center',
    // alignItems: 'center',
    // overflow: 'scroll',
    // backgroundColor: 'darkgreen',
  },

  container_elements: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // width: '100%',
    
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
    height: Dimensions.get('window').height * 0.8,
    objectFit: 'cover',
  },

  image_bottom: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
    objectFit: 'cover',
  },


  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10%',
    marginTop: '20%',
  },

  table: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    elevation: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  cellHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },

  cell: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },

  cellResultado: {
    color: '#4CAF50',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  actions:{
    height: '5%',
    width: '40%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 20,
    marginBottom: 30,
  },

  button_text: {
    fontSize: 18,
    color: '#396d3d',
    // color: '#2b632ec9',
    fontWeight: 'bold',
  },

  observationsContainer: {
    width: '100%',
    marginVertical: 20,
  },
  observationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nonEditableObservation: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 10,
  },
  editableObservation: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    textAlignVertical: 'top',
  },
  

});
