// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useNavigation, useRoute} from '@react-navigation/native';
// import { router, SearchParams} from 'expo-router';

// export default function ResultadosScreen() {
//   const navigation = useNavigation();
//   const route = useRoute();
// //   const { contador } = route.params; // Recebe os dados do contador via parâmetros de navegação
//     const { pontos, celula1, celula2, celula3, celula4, celula5, celula6 } = useSearchParams();

//   const goToHome = () => {
//     router.push("../../")

//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Resultados</Text>
//       <Text>Pontos: {contador.pontos}</Text>
//       <Text>Célula 1: {contador.celula1}</Text>
//       <Text>Célula 2: {contador.celula2}</Text>
//       <Text>Célula 3: {contador.celula3}</Text>
//       <Text>Célula 4: {contador.celula4}</Text>
//       <Text>Célula 5: {contador.celula5}</Text>
//       <Text>Célula 6: {contador.celula6}</Text>

//       <Button title="Voltar para o início" onPress={goToHome} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });
