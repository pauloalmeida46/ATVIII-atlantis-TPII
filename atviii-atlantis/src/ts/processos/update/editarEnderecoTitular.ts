import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class EditarEnderecoTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Editando o endereço do cliente...')
        let rua = this.entrada.receberTexto('Qual a nova rua?')
        let bairro = this.entrada.receberTexto('Qual o novo bairro?')
        let cidade = this.entrada.receberTexto('Qual a nova cidade?')
        let estado = this.entrada.receberTexto('Qual o novo estado?')
        let pais = this.entrada.receberTexto('Qual o novo país?')
        let codigoPostal = this.entrada.receberTexto('Qual o novo código postal?')

        const novoEndereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
        this.cliente.Endereco = novoEndereco

        this.cliente.Dependentes.forEach(dependente => {
            dependente.Endereco = (this.cliente.Endereco.clonar() as Endereco)
        })

    }
}
