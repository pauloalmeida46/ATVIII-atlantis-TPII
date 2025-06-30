import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ListagemAcomodacoes from "../read/listagemAcomodacoes"
import Cliente from "../../modelos/cliente";
import Acomodacao from "../../modelos/acomodacao";

export default class CadastroHospedagem extends Processo {
    private clientes: Cliente[];
    private listagemAcomodacoes: ListagemAcomodacoes;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
        this.listagemAcomodacoes = new ListagemAcomodacoes();
    }

    processar(): void {
        console.clear();
        console.log('Iniciando o cadastro de hospedagem...');

        const nomeCliente = this.entrada.receberTexto('Digite o nome do cliente a ser hospedado:');
        const clienteParaHospedar = this.clientes.find(cliente => cliente.Nome === nomeCliente);

        if (clienteParaHospedar) {
            console.log(`Cliente ${nomeCliente} encontrado.`);
            console.log('Escolha uma acomodação disponível:');

            this.listagemAcomodacoes.processar();

            const indiceAcomodacao = this.entrada.receberNumero('Digite o índice da acomodação desejada:');
            const acomodacaoEscolhida = Armazem.InstanciaUnica.Acomodacoes[indiceAcomodacao];

            if (acomodacaoEscolhida) {
                clienteParaHospedar.Acomodacao = acomodacaoEscolhida;
                console.log(`Hospedagem cadastrada com sucesso para ${clienteParaHospedar.Nome}.`);
            } else {
                console.log('Acomodação não encontrada.');
            }
        } else {
            console.log(`Cliente com o nome ${nomeCliente} não encontrado.`);
        }
    }
}