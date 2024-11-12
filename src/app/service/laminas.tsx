import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Axios from 'axios';

const URL_ADIANTI = "http://192.168.15.10/biomedcells/projeto/";  

// http://192.168.15.10/biomedcells/projeto/get_lamina.php?

interface Lamina {
  id: number;
  nome: string;
  // inclua outros campos que a resposta JSON retorna, se houver
}

const LaminaService: React.FC = () => {
  const [laminas, setLaminas] = useState<Lamina[]>([]);

  useEffect(() => { 
    const fetchLaminas = async () => {
      try {
        const response = await Axios.get<Lamina[]>(`${URL_ADIANTI}/get_lamina.php`);
        setLaminas(response.data);
      } catch (error) {
        console.error("Erro ao buscar as lâminas:", error);
      }
    };

    fetchLaminas();
  }, []);

  return (
    <ScrollView>
      {laminas.length > 0 ? (
        laminas.map((lamina) => (
          <Text key={lamina.id}>{lamina.nome}</Text>
        ))
      ) : (
        <Text>Carregando lâminas...</Text>
      )}
    </ScrollView>
  );
};

export default LaminaService;
