import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import EditarEnderecoTitular from "./editarEnderecoTitular";
import EditarTelefoneTitular from "./editarTelefoneTitular";

export default class EditarClienteTitular extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a edição de um cliente titular...');

        const nomeCliente = this.entrada.receberTexto('Digite o nome do cliente a ser editado:');
        const clienteParaEditar = this.clientes.find(cliente => cliente.Nome === nomeCliente);

        if (clienteParaEditar) {
            console.log('Cliente encontrado. Preencha as novas informações:');
            
            const novoNome = this.entrada.receberTexto('Novo nome:');
            const novoNomeSocial = this.entrada.receberTexto('Novo nome social:');
            const novaDataNascimento = this.entrada.receberData('Nova data de nascimento:');

            clienteParaEditar.Nome = novoNome;
            clienteParaEditar.NomeSocial = novoNomeSocial;
            clienteParaEditar.DataNascimento = novaDataNascimento;

            this.processo = new EditarEnderecoTitular(clienteParaEditar)
            this.processo.processar()

            this.processo = new EditarTelefoneTitular(clienteParaEditar)
            this.processo.processar()

            console.log('Cliente editado com sucesso.');
        } else {
            console.log(`Cliente com o nome ${nomeCliente} não encontrado.`);
        }
    }
}