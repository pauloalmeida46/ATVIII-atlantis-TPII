import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirClienteDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void { 
        const nomeDependente = this.entrada.receberTexto('Qual o nome do dependente a ser excluído?');
        
        let dependenteEncontrado = false;

        for (const cliente of this.clientes) {
            const indiceDependente = cliente.Dependentes.findIndex(dependente => dependente.Nome === nomeDependente);
            if (indiceDependente !== -1) {
                cliente.Dependentes.splice(indiceDependente, 1);
                console.log(`Dependente com o nome ${nomeDependente} excluído com sucesso.`);
                dependenteEncontrado = true;
                break; 
            }
        }

        if (!dependenteEncontrado) {
            console.log(`Dependente com o nome ${nomeDependente} não encontrado.`);
        }
    }
}
