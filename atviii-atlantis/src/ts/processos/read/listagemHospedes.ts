import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorHospede from "../../impressores/impressorHospede";
import Cliente from "../../modelos/cliente";

export default class ListagemHospedes extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log('Iniciando a listagem de hospedes...');

        this.clientes.forEach(cliente => {
            if (cliente.Acomodacao) {
                const impressor = new ImpressorHospede(cliente);
                console.log(impressor.imprimir());
            }
        });
    }
}