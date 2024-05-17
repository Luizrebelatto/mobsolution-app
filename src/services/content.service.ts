import api from "./api";

interface FetchGeneralView {
    id: number;
}

interface FetchContentByTheme {
    idUsuario: number;
    ordenacao: string;
}

export function content(){
    async function generalView({ id }: FetchGeneralView): Promise<any> {
        try {
            const response = await api().post("estatisticas/visaogeral", {
               id: id
            })
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async function contentByTheme({ idUsuario, ordenacao }: FetchContentByTheme): Promise<any> {
        try {
            const response = await api().post("usuario/solicitarRecuperacao", {
                idUsuario: idUsuario,
                ordenacao: ordenacao
            })
            return response
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return { generalView, contentByTheme }
}