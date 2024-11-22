// import React, { useState } from 'react';
// import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
// import { router} from 'expo-router';
// import Zoom from 'react-native-zoom-reanimated';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// // import { style } from './styles';
// export type Contador = {
//   pontos: number,
//   neutrofilos: number,
//   monocitos: number,
//   eosilofilos: number,
//   basofilos: number,
//   linfocitos_t: number,
//   linfocitos_a: number,
// }
// // export interface ContadorProps {
// //   onFinish: (contador: Contador) => void
// // }

// export default function Contador() {
//   const [ contador, setContador ] = React.useState<Contador>({
//     pontos: 0,
//     neutrofilos: 0,
//     monocitos: 0,
//     eosilofilos: 0,
//     basofilos: 0,
//     linfocitos_t: 0,
//     linfocitos_a: 0,
// })

//   const goToHome = () => {
//     router.push("../../")
//   };

//   const handleFinish = () => {
//     router.push({
//       pathname: '../../pages/resultado/',
//       params: {
//         pontos: contador.pontos,
//         neutrofilos: contador.neutrofilos,
//         monocitos: contador.monocitos,
//         eosilofilos: contador.eosilofilos,
//         basofilos: contador.basofilos,
//         linfocitos_t: contador.linfocitos_t,
//         linfocitos_a: contador.linfocitos_a,
//       },
//     });
//   };


//   // Função para incrementar o contador
//   const adicionar = async (celula:'tipo1'|'tipo2'|'tipo3'|'tipo4'|'tipo5'|'tipo6') => {
//     //Busca os valores atuais do estado
//     let { pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a } = contador;
//     if (celula == 'tipo1') {
//         neutrofilos++
//     } 
//     else if (celula == 'tipo2') 
//     {
//         monocitos++
//     } 
//     else if (celula == 'tipo3') 
//     {
//         eosilofilos++
//     } 
//     else if (celula == 'tipo4') 
//     {
//         basofilos++
//     } 
//     else if (celula == 'tipo5') 
//     {
//         linfocitos_t++
//     } 
//     else
//     {
//         linfocitos_a++
//     } 
//     pontos ++
//     //Atualiza os valores
//     setContador({ pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a })
//   }
//   return (
//     <GestureHandlerRootView>
//       <View style={style.container}>

//         <View style={style.imageContainer}>
//           <Zoom style={{
            
//             height: '100%',
//             width: '100%',
//             position: 'absolute',
            
//             }}>
//             <Image 
//               source={require('../../images/image.png')} 
//               style={style.imagem} 
//             />

//           </Zoom>
//         </View>

//         <Text style={style.contadorText}>Total: {contador.pontos}</Text>
//         <View style={style.buttons_container}>
          
//           <TouchableOpacity 
//               style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
//               onPress={() => adicionar('tipo1')}
//               disabled={contador.pontos >= 100}
//           >
//             <Text>Neutrofilos</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//               style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
//               onPress={() => adicionar('tipo2')}
//               disabled={contador.pontos >= 100}
//           >
//             <Text>Monocitos</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//               style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
//               onPress={() => adicionar('tipo3')}
//               disabled={contador.pontos >= 100}
//           >
//             <Text>Eosilofilos</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//               style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
//               onPress={() => adicionar('tipo4')}
//               disabled={contador.pontos >= 100}
//           >
//             <Text>Basofilos</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//               style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
//               onPress={() => adicionar('tipo5')}
//               disabled={contador.pontos >= 100}
//           >
//             <Text>Linf .T</Text>
//           </TouchableOpacity>
//           <TouchableOpacity 
//               style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
//               onPress={() => adicionar('tipo6')}
//               disabled={contador.pontos >= 100}
//           >
//             <Text>Linf .A</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={style.actions_container}>
//           <TouchableOpacity style={[style.actions, contador.pontos < 100 && { opacity: 0.5 }]} disabled={contador.pontos < 100} onPress={handleFinish}>
//             <Text>Finalizar</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={style.actions}  onPress={goToHome}>
//             <Text>Voltar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </GestureHandlerRootView>
//   );
// }
// const style = StyleSheet.create({
    
//   container: {
//     height: '100%',
//     width: '100%',
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     // backgroundColor: 'grey',
//     gap: 10,
//   },



//   imageContainer:{
//     marginTop: 40,
//     borderRadius: 50,
//     width: '70%',
//     height: '30%',
//     position: 'relative',
//     backgroundColor: 'black',
//     overflow: 'hidden',
//     // zIndex: 2,
//   },
//   imagem: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').width * 0.75,      
//     marginTop: '10%',
//     // backgroundColor: 'green',
//   },
//   contadorText: {
//     textAlign: 'center',
//     height: '5%',
//     width: '50%',
//     fontSize: 20,
//     // backgroundColor: 'purple',
//   },
//   buttons_container: {
//     // position: 'relative',
//     padding: '5%',
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 20,
//     justifyContent: 'center',
//     // alignItems: 'flex-end',
//     alignContent: 'center',
//     height: '25%',
//     width: '90%',
//     // backgroundColor: 'green',
//   },
//   buttons: {
//     height: '30%',
//     width: '40%',
//     backgroundColor: '#86fa8f',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
//   actions_container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     height: '10%',
//     width: '100%',
//     marginTop: 'auto',
//     marginBottom: 20,
//     // backgroundColor: 'red',
//   },
//   actions:{
//     height: '60%',
//     width: '40%',
//     backgroundColor: '#55a05b',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
// });