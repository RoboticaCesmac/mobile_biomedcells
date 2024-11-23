// src/components/ListaCelulas.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ScrollView , ImageBackground, TouchableOpacity} from 'react-native';
import { fetchAllCelulas } from '../../service/celulas';
import { router} from 'expo-router';

type Celula = {
  id: number;
  nome: string;
  imagem_1: string; // Atributo para imagem 1
  imagem_2: string; // Atributo para imagem 2
  imagem_3: string; // Atributo para imagem 3
  descricao: string; // Descrição da célula
};

const { width } = Dimensions.get('window');
const URL_ADIANTI = "http://192.168.15.10/biomedcells/projeto"; // Base URL do servidor

const ListaCelulas = () => {
  const [celulas, setCelulas] = useState<Celula[]>([]);

  useEffect(() => {
    const loadCelulas = async () => {
      const allCelulas = await fetchAllCelulas();
      setCelulas(allCelulas);
    };

    loadCelulas();
  }, []);

  // Função para criar um array de imagens a partir dos atributos
  const getImagens = (item: Celula) => {
    const imagens = [];
    if (item.imagem_1) imagens.push(item.imagem_1);
    if (item.imagem_2) imagens.push(item.imagem_2);
    if (item.imagem_3) imagens.push(item.imagem_3);
    return imagens;
  };

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground source={require('../../images/waves2.png')} style={styles.background_image}/>
      </View>

      <Text style={styles.title}>Atlas da células</Text>
      <FlatList
        data={celulas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.celulaItem}>
            <Text style={styles.celulaText}>{item.nome}</Text>
            <Text style={styles.descricaoText}>{item.descricao}</Text>
            <ScrollView horizontal contentContainerStyle={styles.imagesContainer}>
              {getImagens(item).map((imagem, index) => (
                <Image
                  key={index}
                  source={{ uri: `${URL_ADIANTI}/${imagem}` }} // Prefixa a URL completa da imagem
                  style={styles.image}
                />
              ))}
            </ScrollView>

          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity style={styles.button}  onPress={goBack}>
        <Text style={styles.button_text}>Menu Principal</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ListaCelulas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  
  background: {
    position: 'absolute',
    top: 0,
    width: Dimensions.get('window').width,
    height: '30%',
  },

  background_image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    objectFit: 'cover',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: '15%',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },

  listContent: {
    paddingBottom: 20,
    // padding: 5,
    width: Dimensions.get('window').width * 0.93 ,
    gap: 5,
  },
  celulaItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 12,
    borderRadius: 12,
    gap: 10,
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 5,
  },
  imagesContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'red',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
    elevation: 10,
  },
  celulaText: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    // marginBottom: 8,
    // backgroundColor: 'blue',
  },
  descricaoText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    // backgroundColor: 'green',
  },

  button: {
    backgroundColor: '#72bf75f0', 
    paddingVertical: 12,        
    paddingHorizontal: 20,      
    borderRadius: 8,            
    alignItems: 'center',       
    marginTop: 20,              
    elevation: 3,               
  },

  button_text: {
    fontSize: 18,
    color: '#235025',
    fontWeight: 'bold',
  },

});
