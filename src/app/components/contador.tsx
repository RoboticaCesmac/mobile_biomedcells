import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { router} from 'expo-router';


// DEFINE A ESTRUTURA DO CONTADOR
export type Contador = {
    pontos: number,
    neutrofilos: number,
    monocitos: number,
    eosilofilos: number,
    basofilos: number,
    linfocitos_t: number,
    linfocitos_a: number,
}


//AO FINALIZAR A CONTAGEM RETORNA OS DADOS
export interface ContadorProps {
    onFinish: (contador: Contador) => void
}

export function Contador ({onFinish}: ContadorProps) {

  // const [containerHeight, setContainerHeight] = useState(0);
  // const minHeight = 50;

    const [ contador, setContador ] = React.useState<Contador>({
        pontos: 0,
        neutrofilos: 0,
        monocitos: 0,
        eosilofilos: 0,
        basofilos: 0,
        linfocitos_t: 0,
        linfocitos_a: 0
    })
    // -----------------------------------------------
    const adicionar = async (celula:'tipo1'|'tipo2'|'tipo3'|'tipo4'|'tipo5'|'tipo6') => {
        //Busca os valores atuais do estado
        let { pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a } = contador;
    
        if (celula == 'tipo1') {
            neutrofilos++
        } 
        else if (celula == 'tipo2') 
        {
            monocitos++
        } 
        else if (celula == 'tipo3') 
        {
            eosilofilos++
        } 
        else if (celula == 'tipo4') 
        {
            basofilos++
        } 
        else if (celula == 'tipo5') 
        {
            linfocitos_t++
        } 
        else
        {
            linfocitos_a++
        } 
    
        pontos ++
    
        //Atualiza os valores
        setContador({ pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a })
    }
    // --------
    const resetar = () => setContador({pontos: 0, neutrofilos: 0, monocitos: 0, eosilofilos: 0, basofilos: 0, linfocitos_t: 0, linfocitos_a: 0})

    const goBack = () => {
      router.back();
    };

    const handleFinish = () => {
      router.push({
        pathname: '../../pages/resultado/',
        params: {
          pontos: contador.pontos,
          neutrofilos: contador.neutrofilos,
          monocitos: contador.monocitos,
          eosilofilos: contador.eosilofilos,
          basofilos: contador.basofilos,
          linfocitos_t: contador.linfocitos_t,
          linfocitos_a: contador.linfocitos_a,
        },
      });
    };

    return (

      <ScrollView>
        <View style={style.contadorContainer}>

          <Text style={style.contadorText}>Total: {contador.pontos}</Text>

            <View style={style.buttons_container}>
              
              <TouchableOpacity 
                  style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                  onPress={() => adicionar('tipo1')}
                  disabled={contador.pontos >= 100}
              >
                <Text style={style.buttons_text}>Neutrofilos</Text>

              </TouchableOpacity>

              <TouchableOpacity 
                  style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                  onPress={() => adicionar('tipo2')}
                  disabled={contador.pontos >= 100}
              >
                <Text style={style.buttons_text}>Monocitos</Text>

              </TouchableOpacity>

              <TouchableOpacity 
                  style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                  onPress={() => adicionar('tipo3')}
                  disabled={contador.pontos >= 100}
              >
                <Text style={style.buttons_text}>Eosilofilos</Text>

              </TouchableOpacity>


              <TouchableOpacity 
                  style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                  onPress={() => adicionar('tipo4')}
                  disabled={contador.pontos >= 100}
              >
                <Text style={style.buttons_text}>Basofilos</Text>

              </TouchableOpacity>

              <TouchableOpacity 
                  style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                  onPress={() => adicionar('tipo5')}
                  disabled={contador.pontos >= 100}
              >
                <Text style={style.buttons_text}>Linf. T</Text>

              </TouchableOpacity>


              <TouchableOpacity 
                  style={[style.buttons, contador.pontos >= 100 && { opacity: 0.5 }]}
                  onPress={() => adicionar('tipo6')}
                  disabled={contador.pontos >= 100}
              >
                <Text style={style.buttons_text}>Linf. A</Text>

              </TouchableOpacity>


            </View>

            <View style={style.actions_container}>

              <TouchableOpacity style={[style.actions, contador.pontos < 100 && { opacity: 0.5 }]} disabled={contador.pontos < 100} onPress={() => onFinish(contador)} >
                <Text style={style.actions_text}>Finalizar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.actions}  onPress={goBack}>
                <Text style={style.actions_text}>Voltar</Text>
              </TouchableOpacity>

            </View>

        </View>
      </ScrollView>
    );
}

const style = StyleSheet.create({
    
  contadorContainer: {
    // height: '60%',
    height: Dimensions.get('window').height * 0.52,
    width: '100%',
    // backgroundColor: 'grey',
    flex: 1,
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 5,
    // overflow: 'scroll',
  },

  contadorText: {
    textAlign: 'center',
    height: '10%',
    width: '50%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
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
    width: '90%',
    // backgroundColor: 'green',
  },

  buttons: {
    height: Dimensions.get('window').height * 0.06,
    width: '45%',
    backgroundColor: '#72bf75f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,         
    shadowRadius: 4,            
    elevation: 4,       
    
  },

  buttons_text:{
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },

  actions_container: {
    // position:'static',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '15%',
    // height: 40,
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
    // backgroundColor: 'red',
  },

  actions:{
    height: Dimensions.get('window').height * 0.05,
    // height: 39,
    width: '40%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,         
    shadowRadius: 4,            
    elevation: 4,
  },

  actions_text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#396d3d',
  },

});