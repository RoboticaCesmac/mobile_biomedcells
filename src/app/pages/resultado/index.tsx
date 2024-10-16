import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
  const { pontos, celula1, celula2, celula3, celula4, celula5, celula6 } = route.params as RouteParams;// Garantindo que os parâmetros existam

  const goToHome = () => {
    router.push("../../");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <Text>Pontos: {pontos}</Text>
      <Text>Célula 1: {celula1}</Text>
      <Text>Célula 2: {celula2}</Text>
      <Text>Célula 3: {celula3}</Text>
      <Text>Célula 4: {celula4}</Text>
      <Text>Célula 5: {celula5}</Text>
      <Text>Célula 6: {celula6}</Text>

      <Button title="Voltar para o início" onPress={goToHome} />
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
});
