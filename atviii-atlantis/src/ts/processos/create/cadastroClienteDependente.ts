import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";
import Telefone from "../../modelos/telefone";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";


export default class CadastroClienteDependente extends Processo {

    private clientesTitulares: Cliente[]
    constructor() {
        super()
        this.clientesTitulares = Armazem.InstanciaUnica.Clientes
    }
    
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente dependente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)
        
        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let nomeTitular = this.entrada.receberTexto('Qual o nome do titular?')
        let indexTitular = this.clientesTitulares.findIndex(cliente => cliente.Nome === nomeTitular);

        if (indexTitular >= 0) {
            let clienteTitularEncontrado = this.clientesTitulares[indexTitular];
            cliente.Titular = clienteTitularEncontrado;

            cliente.Endereco = (clienteTitularEncontrado.Endereco.clonar() as Endereco)
            clienteTitularEncontrado.Telefones.forEach((telefone: Telefone) => {
                cliente.Telefones.push(telefone.clonar() as Telefone);
            });

            Armazem.InstanciaUnica.Clientes[indexTitular].Dependentes.push(cliente);
        } else {
            console.log(`Titular com o nome ${nomeTitular} não encontrado.`);
        }

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}
