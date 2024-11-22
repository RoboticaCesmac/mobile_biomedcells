// src/components/ListaCelulas.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { fetchAllCelulas } from '../../service/celulas';

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atlas</Text>
      <FlatList
        data={celulas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.celulaItem}>
            <ScrollView horizontal contentContainerStyle={styles.imagesContainer}>
              {getImagens(item).map((imagem, index) => (
                <Image
                  key={index}
                  source={{ uri: `${URL_ADIANTI}/${imagem}` }} // Prefixa a URL completa da imagem
                  style={styles.image}
                />
              ))}
            </ScrollView>
            <Text style={styles.celulaText}>{item.nome}</Text>
            <Text style={styles.descricaoText}>{item.descricao}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ListaCelulas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '15%',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
    width: '100%',
  },
  celulaItem: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  imagesContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  celulaText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricaoText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
