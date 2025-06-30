import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class FinalizarHospedagem extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Finalizando a hospedagem de um cliente...');

        const nomeCliente = this.entrada.receberTexto('Digite o nome do cliente para finalizar a hospedagem:');
        const clienteParaFinalizar = this.clientes.find(cliente => cliente.Nome === nomeCliente);

        if (clienteParaFinalizar && clienteParaFinalizar.Acomodacao) {
            clienteParaFinalizar.Acomodacao = null;
            console.log(`Hospedagem do cliente ${clienteParaFinalizar.Nome} finalizada com sucesso.`);
        } else {
            console.log(`Cliente com o nome ${nomeCliente} não encontrado ou não está hospedado.`);
        }
    }
}
