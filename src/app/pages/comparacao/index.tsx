import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button , TouchableOpacity, ActivityIndicator} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchLaminaById } from '../../service/laminas';
import { router } from 'expo-router';
import loading_styles from '../styles/loading_styles';

interface RouteParams {
  lamina_id: number;
  pontos: number;
  neutrofilos: number;
  monocitos: number;
  eosilofilos: number;
  basofilos: number;
  linfocitos_t: number;
  linfocitos_a: number;
}

type Lamina = {
  
  id: number;
  nome: string;
  neutrofilo_relativo: number;
  monocito_relativo: number;
  eosilofilo_relativo: number;
  basofilo_relativo: number;
  linfocito_t_relativo: number;
  linfocito_a_relativo: number;
  blastos_relativo: number;

  hemacias: number;
  hemoglobina: number;
  hematocrito: number;
  volume_corp_medio: number;
  hemoglobina_corp_medio: number;
  concentracao_hemoglobina: number;
  rdw: number;
  plaquetas: number;

  observacao: string;

};


export default function Comparacao() {
  const route = useRoute();
  const { lamina_id ,pontos, neutrofilos, monocitos, eosilofilos, basofilos, linfocitos_t, linfocitos_a } = route.params as RouteParams;
  const [lamina, setLamina] = useState<any>(null); // Estado para armazenar os dados da lâmina
  const [loading, setLoading] = useState<boolean>(true); // Estado para o indicador de carregamento

  useEffect(() => {
    const loadLamina = async () => {
      if (!lamina_id) {
        console.warn('Nenhum ID da lâmina foi fornecido!');
        setLoading(false);
        return;
      }

      try {
        const laminaData = await fetchLaminaById(Number(lamina_id)); // Busca os dados da lâmina
        setLamina(laminaData);
      } catch (error) {
        console.error('Erro ao buscar os dados da lâmina:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLamina();
  }, [lamina_id]);

  if (loading) {
    return (
      <View style={loading_styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={loading_styles.loadingText}>Carregando dados da lâmina...</Text>
      </View>
    );
  }

  if (!lamina) {
    return (
      <View style={loading_styles.errorContainer}>
        <Text style={loading_styles.errorText}>Erro ao carregar a lâmina. Tente novamente mais tarde.</Text>
        <TouchableOpacity style={loading_styles.retryButton} onPress={() => router.push('/')}>
          <Text style={loading_styles.retryButtonText}>Voltar para a tela inicial</Text>
        </TouchableOpacity>
      </View>
    );
  }


  const goToHome = () => {
    router.push("../../");
  };

  // Função para calcular a porcentagem
  const calcularPorcentagem = (valor: number, total: number) => {
    return total > 0 ? ((valor / total) * 100).toFixed(2) : '0.00';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revisão de laudo</Text>

      {/* Tabela de resultados */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Células</Text>
          <Text style={styles.cellHeader}>Contagem</Text>
          <Text style={styles.cellHeader}>Lâmina</Text>
        </View>

        {/* Célula 1 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Neutrofilos</Text>
          <Text style={styles.cell}>
            {neutrofilos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.neutrofilo_relativo}</Text>
        </View>

        {/* Célula 2 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Monocitos</Text>
          <Text style={styles.cell}>
            {monocitos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.monocito_relativo}</Text>
        </View>

        {/* Célula 3 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Eosilofilos</Text>
          <Text style={styles.cell}>
            {eosilofilos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.eosilofilo_relativo}</Text>
        </View>

        {/* Célula 4 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Basofilos</Text>
          <Text style={styles.cell}>
            {basofilos}
          </Text>
          <Text style={styles.cellResultado}>{lamina.basofilo_relativo}</Text>
        </View>

        {/* Célula 5 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Linfocitos .T</Text>
          <Text style={styles.cell}>
            {linfocitos_t}
          </Text>
          <Text style={styles.cellResultado}>{lamina.linfocito_t_relativo}</Text>
        </View>

        {/* Célula 6 */}
        <View style={styles.row}>
          <Text style={styles.cell}>Linfocito A.</Text>
          <Text style={styles.cell}>
            {linfocitos_a}
          </Text>
          <Text style={styles.cellResultado}>{lamina.linfocito_a_relativo}</Text>
        </View>

        {/* Total de pontos */}
        <View style={styles.row}>
          <Text style={styles.cellHeader}>Total de Pontos</Text>
          <Text style={styles.cellHeader}>{pontos}</Text>
          {/* <Text style={styles.cellHeader}>100%</Text> */}
        </View>
      </View>

      <TouchableOpacity style={styles.actions}  onPress={goToHome}>
        <Text>Menu principal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  table: {
    width: '100%',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cellHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cell: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  cellResultado: {
    color: 'red',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  actions:{
    height: '5%',
    width: '40%',
    backgroundColor: '#55a05b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
