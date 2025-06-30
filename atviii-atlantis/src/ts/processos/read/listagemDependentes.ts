import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import ImpressorDependentes from "../../impressores/impressorClienteDependentes";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos dependentes de um titular...');
        const nomeTitular = this.entrada.receberTexto('Digite o nome do titular:');
        const titularEncontrado = this.clientes.find(cliente => cliente.Nome === nomeTitular);
        if (titularEncontrado) {
            const impressorDependentesTitular = new ImpressorDependentes(titularEncontrado.Dependentes);
            console.log(impressorDependentesTitular.imprimir());
        } else {
            console.log(`Titular com o nome ${nomeTitular} não encontrado.`);
        }
    }
}