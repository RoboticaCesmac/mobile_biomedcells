import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { fetchRandomLamina } from '../../service/laminas';
import { router} from 'expo-router';

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

  imagem: string;

  neutrofilo_absoluto: number;
  monocito_absoluto: number;
  eosilofilo_absoluto: number;
  basofilo_absoluto: number;
  linfocito_t_absoluto: number;
  linfocito_a_absoluto: number;
  blastos_absoluto: number;

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


const LaudoScreen = () => {



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
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }


  const goToReview = () => {
    router.push({
      pathname: '../revisao/',
      params: {
        lamina_id: lamina.id
      },
    });
  };

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.background}>
        <ImageBackground source={require('../../images/waves1.png')} style={styles.background_image}/>
      </View>


      <Text style={styles.title}>Análise de Laudo</Text>

      {/* Tabela Eritograma */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Eritograma</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>Hemácias (milhões/mm³)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.hemacias}</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>Hemoglobina (g/dL)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.hemoglobina}</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>Hematócrito (%)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.hematocrito}</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>V.C.M (fL)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.volume_corp_medio}</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>H.C.M (pg)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.hemoglobina_corp_medio}</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>C.H.C.M (g/dL)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.concentracao_hemoglobina}</Text>
        </View>

        <View style={styles.tableRowEritograma}>
          <Text style={styles.cellTextEritograma}>R.D.W (%)</Text>
          <Text style={styles.cellTextEritograma}>{lamina.rdw}</Text>
        </View>


      </View>

      {/* Tabela Leucograma */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Leucograma</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.cellText, styles.cellHeader]}>Tipo</Text>
          <Text style={[styles.cellText, styles.cellHeader]}>Relativo (%)</Text>
          <Text style={[styles.cellText, styles.cellHeader]}>Absoluto</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Neutrófilos</Text>
          <Text style={styles.cellText}>{lamina.neutrofilo_relativo}%</Text>
          <Text style={styles.cellText}>{lamina.neutrofilo_absoluto}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Monocitos</Text>
          <Text style={styles.cellText}>{lamina.monocito_relativo}%</Text>
          <Text style={styles.cellText}>{lamina.monocito_absoluto}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Eosilofilos</Text>
          <Text style={styles.cellText}>{lamina.eosilofilo_relativo}%</Text>
          <Text style={styles.cellText}>{lamina.eosilofilo_absoluto}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Basofilos</Text>
          <Text style={styles.cellText}>{lamina.basofilo_relativo}%</Text>
          <Text style={styles.cellText}>{lamina.basofilo_absoluto}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Linfocitos T</Text>
          <Text style={styles.cellText}>{lamina.linfocito_t_relativo}%</Text>
          <Text style={styles.cellText}>{lamina.linfocito_t_absoluto}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Linfocitos A</Text>
          <Text style={styles.cellText}>{lamina.linfocito_a_relativo}%</Text>
          <Text style={styles.cellText}>{lamina.linfocito_a_absoluto}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* Botão Revisar Lâmina */}
        <TouchableOpacity style={styles.buttonReview} onPress={goToReview}>
          <Text style={styles.buttonText}>Revisar Lâmina</Text>
        </TouchableOpacity>

        {/* Botão Voltar */}
        <TouchableOpacity style={styles.buttonBack} onPress={goBack}>
          <Text style={styles.buttonText}>Menu Principal</Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },

  background: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    height: '30%',
  },

  background_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    objectFit: 'cover',
  },


  title: {
    marginTop: '15%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },

  table: {
    width: width - 32,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 40,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  cellText: {
    fontSize: 16,
    color: '#333',
    flex: 1, 
    textAlign: 'center',
  },

  cellHeader: {
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
  },

  tableRowEritograma: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  cellTextEritograma: {
    fontSize: 16,
    color: '#333',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  loadingText: {
    fontSize: 18,
    color: '#333',
  },

  buttonContainer: {
    flexDirection: 'row', // Alinha os botões em linha
    // justifyContent: 'space-between',
    alignItems: 'center',
    // width: '80%', // Define a largura total da área dos botões
  },
  buttonReview: {
    backgroundColor: '#72bf75f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 10, // Espaçamento lateral entre os botões
    flex: 1, // O botão se ajustará proporcionalmente ao espaço
  },
  buttonBack: {
    backgroundColor: '#72bf75f0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 10,
    flex: 1, // O botão se ajustará proporcionalmente ao espaço
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default LaudoScreen;