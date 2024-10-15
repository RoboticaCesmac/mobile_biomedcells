import React, { createContext, useContext, useState } from 'react';

// Define o tipo para o estado do contador
export type Contador = {
  pontos: number;
  celula1: number;
  celula2: number;
  celula3: number;
  celula4: number;
  celula5: number;
  celula6: number;
};

// Define o tipo do contexto, incluindo a função de adicionar
type ContadorContextType = {
  contador: Contador;
  adicionar: (tipo: 'tipo1' | 'tipo2' | 'tipo3' | 'tipo4' | 'tipo5' | 'tipo6') => void;
};

// Cria o contexto, inicialmente undefined
const ContadorContext = createContext<ContadorContextType | undefined>(undefined);

// Provider do contexto
export const ContadorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado do contador
  const [contador, setContador] = useState<Contador>({
    pontos: 0,
    celula1: 0,
    celula2: 0,
    celula3: 0,
    celula4: 0,
    celula5: 0,
    celula6: 0,
  });

  // Função para incrementar o contador
  const adicionar = (tipo: 'tipo1' | 'tipo2' | 'tipo3' | 'tipo4' | 'tipo5' | 'tipo6') => {
    setContador((prev) => {
      let newContador = { ...prev, pontos: prev.pontos + 1 };

      switch (tipo) {
        case 'tipo1':
          newContador.celula1++;
          break;
        case 'tipo2':
          newContador.celula2++;
          break;
        case 'tipo3':
          newContador.celula3++;
          break;
        case 'tipo4':
          newContador.celula4++;
          break;
        case 'tipo5':
          newContador.celula5++;
          break;
        case 'tipo6':
          newContador.celula6++;
          break;
      }

      return newContador;
    });
  };

  // Retorna o Provider com o estado e a função de adicionar
  return (
    <ContadorContext.Provider value={{ contador, adicionar }}>
      {children}
    </ContadorContext.Provider>
  );
};

// Hook para usar o contexto
export const useContador = () => {
  const context = useContext(ContadorContext);
  if (!context) {
    throw new Error('useContador must be used within a ContadorProvider aoaoaoo ');
  }
  return context;
};
