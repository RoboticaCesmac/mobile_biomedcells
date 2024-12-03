import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView , Dimensions, ImageBackground, _ScrollView} from 'react-native';
import { fetchSobre } from '../../service/sobre';
import { router} from 'expo-router';

const Sobre = () => {
  const [data, setData] = useState<{ id: number; text: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resultado = await fetchSobre();
        setData(resultado);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.container_elements}>

        <View style={styles.background_image_top}>
            <ImageBackground source={require('../../images/waves3.png')} style={styles.image_top}/>
        </View>

        <View style={styles.background_image_bottom}>
            <ImageBackground source={require('../../images/waves2.png')} style={styles.image_bottom}/>
        </View>

        <Text style={styles.title}>Sobre</Text>
        {loading ? (
            <ActivityIndicator size="large" color="#007BFF" />
            ) : data ? (
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.text}>{data.text}</Text>
            </ScrollView>
            ) : (
            <Text style={styles.error}>Não foi possível carregar os dados.</Text>
        )}

        <TouchableOpacity style={styles.button}  onPress={goBack}>
            <Text style={styles.button_text}>Menu Principal</Text>
        </TouchableOpacity>
        
    </ScrollView>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: Dimensions.get('window').height,
    // backgroundColor: 'red',
  },

  container_elements: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
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
    marginTop: '15%',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  content: {
    // paddingVertical: 10,
    marginTop: 20,
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 30,
    elevation: 5,
    padding: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },

  button: {
    // height: '5%',
    width: '50%',
    backgroundColor: '#fff', 
    paddingVertical: 12,        
    paddingHorizontal: 20,      
    borderRadius: 8,            
    alignItems: 'center',       
    marginTop: 20,              
    elevation: 3,               
  },

  button_text: {
    fontSize: 18,
    color: '#396d3d',
    fontWeight: 'bold',
  },


  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});
