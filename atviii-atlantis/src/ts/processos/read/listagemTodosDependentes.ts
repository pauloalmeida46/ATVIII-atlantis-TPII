import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import ImpressorDependentes from "../../impressores/impressorClienteDependentes";

export default class ListagemTodosDependentes extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log("----------------------------------------");
        console.log('Iniciando a listagem de todos os dependentes.');

        for (const cliente of this.clientes) {
            if (cliente.Dependentes.length > 0) {
                console.log(`Dependentes do titular ${cliente.Nome}:`);
                const impressorDependentes = new ImpressorDependentes(cliente.Dependentes);
                console.log(impressorDependentes.imprimir());
                console.log("----------------------------------------");
            }
        }
    }
}