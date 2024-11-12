import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Axios from 'axios';

const URL_ADIANTI = "http://192.168.15.10/biomedcells/projeto/";  

// http://192.168.15.10/biomedcells/projeto/get_celula.php?

interface Celula {
  id: number;
  nome: string;
  // inclua outros campos que a resposta JSON retorna, se houver
}

const CelulaService: React.FC = () => {
  const [celulas, setCelulas] = useState<Celula[]>([]);

  useEffect(() => { 
    const fetchCelulas = async () => {
      try {
        const response = await Axios.get<Celula[]>(`${URL_ADIANTI}/get_celula.php`);
        setCelulas(response.data);
      } catch (error) {
        console.error("Erro ao buscar as células:", error);
      }
    };

    fetchCelulas();
  }, []);

  return (
    <ScrollView>
      {celulas.length > 0 ? (
        celulas.map((celula) => (
          <Text key={celula.id}>{celula.nome}</Text>
        ))
      ) : (
        <Text>Carregando celulas...</Text>
      )}
    </ScrollView>
  );
};

export default CelulaService;
