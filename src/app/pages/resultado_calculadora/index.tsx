import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground , TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchLaminaById } from '../../service/laminas';
import { router } from 'expo-router';

interface RouteParams {
  lamina_id: number;
  pontos: number;
  neutrofilos: number;
  monocitos: number;
  eosilofilos: number;
  basofilos: number;
  linfocitos_t: number;
  linfocitos_a: number;
}

export default function Comparacao() {
  const route = useRoute();
  const {pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a } = route.params as RouteParams;


  const goToHome = () => {
    router.push("../../");
  };

  // Função para calcular a porcentagem
  const calcularPorcentagem = (valor: number, total: number) => {
    return total > 0 ? ((valor / total) * 100).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>

      <View style={styles.background_image_top}>
        <ImageBackground source={require('../../images/waves2.png')} style={styles.image_top}/>
      </View>

      <View style={styles.background_image_bottom}>
        <ImageBackground source={require('../../images/waves1.png')} style={styles.image_bottom}/>
      </View>

      <Text style={styles.title}>Resultados da Calculadora</Text>

      {/* Tabela de resultados */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Células</Text>
          <Text style={styles.cellHeader}>Contagem</Text>
          <Text style={styles.cellHeader}>Porcentagem (%)</Text>
        </View>

        {/* Célula 1 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Neutrofilos</Text>
          <Text style={styles.cell}>
            {neutrofilos}
          </Text>
          <Text style={styles.cellResultado}>{calcularPorcentagem(neutrofilos, pontos)}%</Text>
        </View>

        {/* Célula 2 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Monocitos</Text>
          <Text style={styles.cell}>
            {monocitos}
          </Text>
          <Text style={styles.cellResultado}>{calcularPorcentagem(monocitos, pontos)}%</Text>
        </View>

        {/* Célula 3 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Eosilofilos</Text>
          <Text style={styles.cell}>
            {eosilofilos}
          </Text>
          <Text style={styles.cellResultado}>{calcularPorcentagem(eosilofilos, pontos)}%</Text>
        </View>

        {/* Célula 4 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Basofilos</Text>
          <Text style={styles.cell}>
            {basofilos}
          </Text>
          <Text style={styles.cellResultado}>{calcularPorcentagem(basofilos, pontos)}%</Text>
        </View>

        {/* Célula 5 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Linfocitos .T</Text>
          <Text style={styles.cell}>
            {linfocitos_t}
          </Text>
          <Text style={styles.cellResultado}>{calcularPorcentagem(linfocitos_t, pontos)}%</Text>
        </View>

        {/* Célula 6 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Linfocito A.</Text>
          <Text style={styles.cell}>
            {linfocitos_a}
          </Text>
          <Text style={styles.cellResultado}>{calcularPorcentagem(linfocitos_a, pontos)}%</Text>
        </View>

        {/* Total de pontos */}
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Total de Pontos</Text>
          <Text style={styles.cellHeader}>{pontos}</Text>
          {/* <Text style={styles.cellHeader}>100%</Text> */}
        </View>
      </View>

      <TouchableOpacity style={styles.actions}  onPress={goToHome}>
        <Text style={styles.button_text}>Menu principal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'red',
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
    marginBottom: '20%',
  },
  table: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    elevation: 15,
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
    marginTop: 10,
    backgroundColor: '#72bf75f0',
    // backgroundColor: '#4caf50ab',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  button_text: {
    fontSize: 18,
    color: '#fff',
    // color: '#2b632ec9',
    fontWeight: 'bold',
  },
});
