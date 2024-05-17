import api from "./api";

interface FetchUser {
    login: string;
    senha: string;
    nome: string;
}

interface FetchRequestPassword {
    email: string;
}

interface FetchValidateRecoveryCode {
    email: string;
    tokenRecuperarSenha: string;
}

interface FetchChangePassword {
    email: string;
    tokenRecuperarSenha: string;
    novaSenha: string;
}

export function userAuth(){
    async function login({ login, senha, nome }: FetchUser): Promise<any> {
        try {
            const response = await api().post("usuario/login", {
                login: login,
                senha: senha,
                nome: nome
            })
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function requestRecovery({ email }: FetchRequestPassword): Promise<any> {
        try {
            const response = await api().post("usuario/solicitarRecuperacao", {
                email: email
            })
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function validateRecoveryCode({ email, tokenRecuperarSenha }: FetchValidateRecoveryCode): Promise<any> {
        try {
            const response = await api().post("usuario/solicitarRecuperacao", {
                email: email,
                tokenRecuperarSenha: tokenRecuperarSenha
            })
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function changePassword({ email, novaSenha, tokenRecuperarSenha }: FetchChangePassword): Promise<any> {
        try {
            const response = await api().post("usuario/alterarSenha", {
                email: email,
                novaSenha: novaSenha,
                tokenRecuperarSenha: tokenRecuperarSenha
            })
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return { login, requestRecovery, validateRecoveryCode, changePassword }
}