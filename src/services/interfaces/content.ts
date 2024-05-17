export interface UserStats {
    id: number;
    qtdRespondidas: number;
    qtdAcertos: number;
    qtdErros: number;
    qtdSimuladosFeitos: number;
    diasSemFaltar: number;
    qtdFlashcardsRespondidos: number;
    qtdAcertosFlashcards: number;
    qtdErrosFlashcards: number;
    qtdFlashcardsCasosClinicosRespondidos: number;
    qtdAcertosFlashcardsCadosClinicos: number;
    qtdErrosFlashcardsCadosClinicos: number;
    questoesFavoritadas: number[];
    temaDominado: DominatedTopic;
    temaMenosDominado: LessDominatedTopic;
  }
  
export interface DominatedTopic {
    id: number;
    nome: string;
    nomeHierarquia: string;
    qtdQuestoes: number;
    qtdTotaisQuestoes: number;
    ativo: boolean;
    temResumo: boolean;
    qtdCartas: number;
    qtdTotaisCartas: number;
    qtdCartasCasosClinicos: number;
    qtdTotaisCartasCasosClinicos: number;
    resumo: string;
    listaDeImagem: Image[];
    icone: Image;
    descendentes: number[];
    descendencia: number[];
    cardsDominados: number;
    qtdQuestoesProvaDeTitulo: number;
    qtdQuestoesOutrosCursos: number;
  }
  
export interface LessDominatedTopic {
    id: number;
    nome: string;
    nomeHierarquia: string;
    qtdQuestoes: number;
    qtdTotaisQuestoes: number;
    ativo: boolean;
    temResumo: boolean;
    qtdCartas: number;
    qtdTotaisCartas: number;
    qtdCartasCasosClinicos: number;
    qtdTotaisCartasCasosClinicos: number;
    resumo: string;
    listaDeImagem: Image[];
    icone: Image;
    descendentes: number[];
    descendencia: number[];
    cardsDominados: number;
    qtdQuestoesProvaDeTitulo: number;
    qtdQuestoesOutrosCursos: number;
}
  
export interface Image {
    id: number;
    nomeArquivo: string;
    largura: number;
    altura: number;
    token?: string;
    numero?: number;
}
  
  
  