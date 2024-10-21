import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { router} from 'expo-router';


// DEFINE A ESTRUTURA DO CONTADOR
export type Contador = {
    pontos: number,
    celula1: number,
    celula2: number,
    celula3: number,
    celula4: number,
    celula5: number,
    celula6: number,
}

//AO FINALIZAR A CONTAGEM RETORNA OS DADOS
export interface ContadorProps {
    onFinish: (contador: Contador) => void
}

export function Contador ({onFinish}: ContadorProps) {

    const [ contador, setContador ] = React.useState<Contador>({
        pontos: 0,
        celula1: 0,
        celula2: 0,
        celula3: 0,
        celula4: 0,
        celula5: 0,
        celula6: 0
    })
    // -----------------------------------------------
    const adicionar = async (celula:'tipo1'|'tipo2'|'tipo3'|'tipo4'|'tipo5'|'tipo6') => {
        //Busca os valores atuais do estado
        let { pontos, celula1, celula2, celula3, celula4, celula5, celula6 } = contador;
    
        if (celula == 'tipo1') {
            celula1++
        } 
        else if (celula == 'tipo2') 
        {
            celula2++
        } 
        else if (celula == 'tipo3') 
        {
            celula3++
        } 
        else if (celula == 'tipo4') 
        {
            celula4++
        } 
        else if (celula == 'tipo5') 
        {
            celula5++
        } 
        else
        {
            celula6++
        } 
    
        pontos ++
    
        //Atualiza os valores
        setContador({ pontos, celula1, celula2, celula3, celula4, celula5, celula6 })
    }
    // --------
    const resetar = () => setContador({pontos: 0, celula1: 0, celula2: 0, celula3: 0, celula4: 0, celula5: 0, celula6: 0})

    const goToHome = () => {
      router.push("../../")
  
    };

    const handleFinish = () => {
      router.push({
        pathname: '../../pages/resultado/',
        params: {
          pontos: contador.pontos,
          celula1: contador.celula1,
          celula2: contador.celula2,
          celula3: contador.celula3,
          celula4: contador.celula4,
          celula5: contador.celula5,
          celula6: contador.celula6,
        },
      });
    };

    // const handleFinish = () => {

    //   // onFinish(contador);
    //   Alert.alert('Resultado', `
    //       Pontos: ${contador.pontos}
    //       Celula 1: ${contador.celula1}
    //       Celula 2: ${contador.celula2}
    //       Celula 3: ${contador.celula3}
    //       Celula 4: ${contador.celula4}
    //       Celula 5: ${contador.celula5}
    //       Celula 6: ${contador.celula6}
    //       `)
    // };

    // -----------------------------------------------
    return (

      <View style={style.contadorContainer}>

          <Text style={style.contadorText}>Contador: {contador.pontos}</Text>

          <View style={style.buttons_container}>
            
            <TouchableOpacity 
                style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                onPress={() => adicionar('tipo1')}
                disabled={contador.pontos >= 100}
            >
              <Text>cel 01</Text>

            </TouchableOpacity>

            <TouchableOpacity 
                style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                onPress={() => adicionar('tipo2')}
                disabled={contador.pontos >= 100}
            >
              <Text>cel 02</Text>

            </TouchableOpacity>

            <TouchableOpacity 
                style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                onPress={() => adicionar('tipo3')}
                disabled={contador.pontos >= 100}
            >
              <Text>cel 03</Text>

            </TouchableOpacity>


            <TouchableOpacity 
                style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                onPress={() => adicionar('tipo4')}
                disabled={contador.pontos >= 100}
            >
              <Text>cel 04</Text>

            </TouchableOpacity>

            <TouchableOpacity 
                style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                onPress={() => adicionar('tipo5')}
                disabled={contador.pontos >= 100}
            >
              <Text>cel 05</Text>

            </TouchableOpacity>


            <TouchableOpacity 
                style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                onPress={() => adicionar('tipo6')}
                disabled={contador.pontos >= 100}
            >
              <Text>cel 06</Text>

            </TouchableOpacity>


          </View>

          <View style={style.actions_container}>

            <TouchableOpacity style={[style.actions, contador.pontos < 100 && { opacity: 0.5 }]} disabled={contador.pontos < 100} onPress={handleFinish}>
              <Text>Finalizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.actions}  onPress={goToHome}>
              <Text>Voltar</Text>
            </TouchableOpacity>

          </View>

        </View>

    );
}

const style = StyleSheet.create({
    
  contadorContainer: {
    height: '60%',
    width: '100%',
    // backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 5,

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
    padding: '2%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    // alignItems: 'flex-end',
    alignContent: 'center',
    height: '55%',
    width: '80%',
    // backgroundColor: 'green',
  },

  buttons: {
    height: '23%',
    width: '45%',
    backgroundColor: '#86fa8f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  actions_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '15%',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
    // backgroundColor: 'red',
  },

  actions:{
    height: '60%',
    width: '40%',
    backgroundColor: '#55a05b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

});