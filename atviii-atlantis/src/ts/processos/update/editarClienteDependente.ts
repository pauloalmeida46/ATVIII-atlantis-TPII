import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class EditarClienteDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a edição de um cliente dependente...');

        const nomeTitular = this.entrada.receberTexto('Digite o nome do titular do dependente:');
        const titularEncontrado = this.clientes.find(cliente => cliente.Nome === nomeTitular);

        if (titularEncontrado) {
            const nomeDependente = this.entrada.receberTexto('Digite o nome do dependente a ser editado:');
            const dependenteParaEditar = titularEncontrado.Dependentes.find(dependente => dependente.Nome === nomeDependente);

            if (dependenteParaEditar) {
                console.log('Dependente encontrado. Preencha as novas informações:');
                
                const novoNome = this.entrada.receberTexto('Novo nome:');
                const novoNomeSocial = this.entrada.receberTexto('Novo nome social:');
                const novaDataNascimento = this.entrada.receberData('Nova data de nascimento:');

                dependenteParaEditar.Nome = novoNome;
                dependenteParaEditar.NomeSocial = novoNomeSocial;
                dependenteParaEditar.DataNascimento = novaDataNascimento;

                console.log('Dependente editado com sucesso.');
            } else {
                console.log(`Dependente com o nome ${nomeDependente} não encontrado.`);
            }
        } else {
            console.log(`Titular com o nome ${nomeTitular} não encontrado.`);
        }
    }
}
