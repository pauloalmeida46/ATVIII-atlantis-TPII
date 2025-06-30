import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirClienteTitular extends Processo {
    
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void { 
        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser excluído ?')
        const indiceCliente = this.clientes.findIndex(cliente => cliente.Nome === nome);

        if (indiceCliente !== -1) {
            this.clientes.splice(indiceCliente, 1);
            console.log(`Cliente com o nome ${nome} excluído com sucesso.`);
        } else {
            console.log(`Cliente com o nome ${nome} não encontrado.`);
        }

    }
}



