import Axios from 'axios';
import { URL_ADIANTI } from '../constants/global_constants';

// Serviço para buscar o conteúdo de "sobre"
export const fetchSobre = async () => {
  try {
    const response = await Axios.get(`${URL_ADIANTI}/get_sobre.php`);
    return response.data; // Retorna o objeto com `id` e `text`
  } catch (error) {
    console.error("Erro ao buscar os dados de 'sobre':", error);
    return null; // Retorna null em caso de erro
  }
};
