export interface ILogin {
    id: number;
    nome: string;
    email: string;
    token: string;
    tipoUsuario: {
      id: number;
      codigo: number;
      nome: string;
      descricao: string;
    }
}

export interface IRecovery {
    error: boolean;
    mensagem: string;
}

export interface ICodeRecovery {
    error: boolean;
    mensagem: string;
}