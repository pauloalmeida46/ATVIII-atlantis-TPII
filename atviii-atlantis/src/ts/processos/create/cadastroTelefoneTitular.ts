import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        console.log('Coletando os dados do telefone...')
        while (this.execucao) {
            let ddd = this.entrada.receberTexto('Qual o ddd?')
            let numero = this.entrada.receberTexto('Qual número?')
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone)

            this.opcao = this.entrada.receberNumero('Deseja cadastrar outro telefone? (1 - Sim, 0 - Não)')

            switch (this.opcao) {
                case 0:
                    this.execucao = false;
                    break;
                case 1:
                    this.execucao = true;
                    break;
                default:
                    console.log('Operação não entendida.');
                    break;
            }
        }
    }

}