import Axios from 'axios';
import { URL_ADIANTI } from '../constants/global_constants';


// Função para buscar todas as lâminas
export const fetchAllLaminas = async () => {
  try {
    const response = await Axios.get(`${URL_ADIANTI}/get_all_laminas.php`);
    return response.data; // Retorna todas as lâminas como um array
  } catch (error) {
    console.error("Erro ao buscar todas as lâminas:", error);
    return [];
  }
};

// Função para buscar uma lâmina específica pelo ID
export const fetchLaminaById = async (laminaID: number) => {
  try {
    const response = await Axios.get(`${URL_ADIANTI}/get_lamina.php?id=${laminaID}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar a lâmina com ID ${laminaID}:`, error);
    return null;
  }
};

// Função para buscar uma lâmina aleatória
export const fetchRandomLamina = async () => {
  try {
    const response = await Axios.get(`${URL_ADIANTI}/get_random_lamina.php`);
    return response.data; // Retorna todas as lâminas como um array
  } catch (error) {
    console.error("Erro ao buscar todas a lâmina:", error);
    return [];
  }
};
