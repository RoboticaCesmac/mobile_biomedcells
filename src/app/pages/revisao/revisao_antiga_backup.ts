// import React from 'react';
// import { View, Text, StyleSheet, Button , TouchableOpacity} from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { router } from 'expo-router';

// interface RouteParams {
//   pontos: number;
//   neutrofilos: number;
//   monocitos: number;
//   eosilofilos: number;
//   basofilos: number;
//   linfocitos_t: number;
//   linfocitos_a: number;
// }

// export default function Resultado() {
//   const route = useRoute();
//   const { pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a } = route.params as RouteParams;

//   const goToHome = () => {
//     router.push("../../");
//   };

//   // Função para calcular a porcentagem
//   const calcularPorcentagem = (valor: number, total: number) => {
//     return total > 0 ? ((valor / total) * 100).toFixed(2) : '0.00';
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Resultados</Text>

//       {/* Tabela de resultados */}
//       <View style={styles.table}>
//         <View style={styles.row}>
//           <Text style={styles.cellHeader}>Tipo de Célula</Text>
//           <Text style={styles.cellHeader}>Quantidade</Text>
//           <Text style={styles.cellHeader}>Porcentagem (%)</Text>
//         </View>

//         {/* Célula 1 */}
//         <View style={styles.row}>
//           <Text style={styles.cell}>Neutrofilos</Text>
//           <Text style={styles.cell}>
//             {neutrofilos} <Text style={styles.extraValue}> (10) </Text>
//           </Text>
//           <Text style={styles.cell}>{calcularPorcentagem(neutrofilos, pontos)}%</Text>
//         </View>

//         {/* Célula 2 */}
//         <View style={styles.row}>
//           <Text style={styles.cell}>Monocitos</Text>
//           <Text style={styles.cell}>
//             {monocitos} <Text style={styles.extraValue}> (47) </Text>
//           </Text>
//           <Text style={styles.cell}>{calcularPorcentagem(monocitos, pontos)}%</Text>
//         </View>

//         {/* Célula 3 */}
//         <View style={styles.row}>
//           <Text style={styles.cell}>Eosilofilos</Text>
//           <Text style={styles.cell}>
//             {eosilofilos} <Text style={styles.extraValue}> (3) </Text>
//           </Text>
//           <Text style={styles.cell}>{calcularPorcentagem(eosilofilos, pontos)}%</Text>
//         </View>

//         {/* Célula 4 */}
//         <View style={styles.row}>
//           <Text style={styles.cell}>Basofilos</Text>
//           <Text style={styles.cell}>
//             {basofilos} <Text style={styles.extraValue}> (2) </Text>
//           </Text>
//           <Text style={styles.cell}>{calcularPorcentagem(basofilos, pontos)}%</Text>
//         </View>

//         {/* Célula 5 */}
//         <View style={styles.row}>
//           <Text style={styles.cell}>Linfocitos .T</Text>
//           <Text style={styles.cell}>
//             {linfocitos_t} <Text style={styles.extraValue}> (26) </Text>
//           </Text>
//           <Text style={styles.cell}>{calcularPorcentagem(linfocitos_t, pontos)}%</Text>
//         </View>

//         {/* Célula 6 */}
//         <View style={styles.row}>
//           <Text style={styles.cell}>Linfocitos .A</Text>
//           <Text style={styles.cell}>
//             {linfocitos_a} <Text style={styles.extraValue}> (12) </Text>
//           </Text>
//           <Text style={styles.cell}>{calcularPorcentagem(linfocitos_a, pontos)}%</Text>
//         </View>

//         {/* Total de pontos */}
//         <View style={styles.row}>
//           <Text style={styles.cellHeader}>Total de Pontos</Text>
//           <Text style={styles.cellHeader}>{pontos}</Text>
//           {/* <Text style={styles.cellHeader}>100%</Text> */}
//         </View>
//       </View>

//       <TouchableOpacity style={styles.actions}  onPress={goToHome}>
//         <Text>Menu principal</Text>
//       </TouchableOpacity>
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
//   table: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   cellHeader: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//   },
//   cell: {
//     fontSize: 16,
//     flex: 1,
//     textAlign: 'center',
//   },
//   extraValue: {
//     color: 'red', // Valor adicional com cor diferente
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

//   actions:{
//     height: '5%',
//     width: '40%',
//     backgroundColor: '#55a05b',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
// });
