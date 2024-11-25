import Axios from 'axios';
import { URL_ADIANTI } from '../constants/global_constants';



// http://192.168.15.10/biomedcells/projeto/get_celula.php?

export const fetchAllCelulas = async () => {
  try {
    const response = await Axios.get(`${URL_ADIANTI}/get_celulas.php`);
    return response.data; // Retorna todas as celulas como um array
  } catch (error) {
    console.error("Erro ao buscar todas as celulas adawawd:", error);
    return [];
  }
};  
