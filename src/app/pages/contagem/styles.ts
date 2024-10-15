import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    
    container: {
      height: '100%',
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      // backgroundColor: 'grey',
      gap: 10,
    },
    imagem: {
      width: 410,
      height: 350,
      // marginTop: '10%',
    },
    contadorText: {
      textAlign: 'center',
      height: '5%',
      width: '50%',
      fontSize: 20,
      // backgroundColor: 'purple',
    },
    buttons_container: {
      // position: 'relative',
      padding: '5%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      justifyContent: 'center',
      // alignItems: 'flex-end',
      alignContent: 'center',
      height: '25%',
      width: '90%',
      // backgroundColor: 'green',
    },
    buttons: {
      height: '30%',
      width: '40%',
      backgroundColor: '#86fa8f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
  
})
