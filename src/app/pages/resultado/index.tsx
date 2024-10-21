import React from 'react';
import { View, Text, StyleSheet, Button , TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';

interface RouteParams {
  pontos: number;
  celula1: number;
  celula2: number;
  celula3: number;
  celula4: number;
  celula5: number;
  celula6: number;
}

export default function Resultado() {
  const route = useRoute();
  const { pontos, celula1, celula2, celula3, celula4, celula5, celula6 } = route.params as RouteParams;

  const goToHome = () => {
    router.push("../../");
  };

  // Função para calcular a porcentagem
  const calcularPorcentagem = (valor: number, total: number) => {
    return total > 0 ? ((valor / total) * 100).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>

      {/* Tabela de resultados */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Tipo de Célula</Text>
          <Text style={styles.cellHeader}>Quantidade</Text>
          <Text style={styles.cellHeader}>Porcentagem (%)</Text>
        </View>

        {/* Célula 1 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Célula 1</Text>
          <Text style={styles.cell}>
            {celula1} <Text style={styles.extraValue}> (10) </Text>
          </Text>
          <Text style={styles.cell}>{calcularPorcentagem(celula1, pontos)}%</Text>
        </View>

        {/* Célula 2 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Célula 2</Text>
          <Text style={styles.cell}>
            {celula2} <Text style={styles.extraValue}> (47) </Text>
          </Text>
          <Text style={styles.cell}>{calcularPorcentagem(celula2, pontos)}%</Text>
        </View>

        {/* Célula 3 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Célula 3</Text>
          <Text style={styles.cell}>
            {celula3} <Text style={styles.extraValue}> (3) </Text>
          </Text>
          <Text style={styles.cell}>{calcularPorcentagem(celula3, pontos)}%</Text>
        </View>

        {/* Célula 4 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Célula 4</Text>
          <Text style={styles.cell}>
            {celula4} <Text style={styles.extraValue}> (2) </Text>
          </Text>
          <Text style={styles.cell}>{calcularPorcentagem(celula4, pontos)}%</Text>
        </View>

        {/* Célula 5 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Célula 5</Text>
          <Text style={styles.cell}>
            {celula5} <Text style={styles.extraValue}> (26) </Text>
          </Text>
          <Text style={styles.cell}>{calcularPorcentagem(celula5, pontos)}%</Text>
        </View>

        {/* Célula 6 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Célula 6</Text>
          <Text style={styles.cell}>
            {celula6} <Text style={styles.extraValue}> (12) </Text>
          </Text>
          <Text style={styles.cell}>{calcularPorcentagem(celula6, pontos)}%</Text>
        </View>

        {/* Total de pontos */}
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Total de Pontos</Text>
          <Text style={styles.cellHeader}>{pontos}</Text>
          {/* <Text style={styles.cellHeader}>100%</Text> */}
        </View>
      </View>

      <TouchableOpacity style={styles.actions}  onPress={goToHome}>
        <Text>Menu principal</Text>
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  table: {
    width: '100%',
    marginBottom: 20,
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
  extraValue: {
    color: 'red', // Valor adicional com cor diferente
    fontSize: 16,
    fontWeight: 'bold',
  },

  actions:{
    height: '5%',
    width: '40%',
    backgroundColor: '#55a05b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
