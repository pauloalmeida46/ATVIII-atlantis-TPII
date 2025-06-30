import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class EditarTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Editando os telefones do cliente...')
        
        console.log('Telefones do cliente:');
        this.cliente.Telefones.forEach((telefone, index) => {
            console.log(`${index}: (${telefone.Ddd}) ${telefone.Numero}`);
        });
        
        const opcao = this.entrada.receberNumero('Deseja cadastrar um novo telefone (1) ou excluir um existente (2)?');

        if (opcao === 1) {
            const ddd = this.entrada.receberTexto('Qual o DDD?');
            const numero = this.entrada.receberTexto('Qual o número?');
            const novoTelefone = new Telefone(ddd, numero);
            this.cliente.Telefones.push(novoTelefone);
            console.log('Novo telefone cadastrado com sucesso.');

        } else if (opcao === 2) {

            const index = this.entrada.receberNumero('Digite o índice do telefone que deseja excluir:');
            if (index >= 0 && index < this.cliente.Telefones.length) {

                this.cliente.Telefones.splice(index, 1);
                console.log('Telefone excluído com sucesso.');

            } else {
                console.log('Índice inválido. Nenhum telefone foi excluído.');
            }
        } else {
            console.log('Opção inválida.');
        }

        const telefonesAtualizados = this.cliente.Telefones
        this.cliente.Dependentes.forEach(dependente => {
            dependente.Telefones = telefonesAtualizados.map(telefone => new Telefone(telefone.Ddd, telefone.Numero));
        });
    }
}
