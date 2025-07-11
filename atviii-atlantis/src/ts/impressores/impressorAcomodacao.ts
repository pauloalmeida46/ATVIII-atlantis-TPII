import Impressor from "../interfaces/impressor";
import Acomodacao from "../modelos/acomodacao";

export default class ImpressorAcomodacao implements Impressor {
    private acomodacao: Acomodacao;
    private index: number;

    constructor(acomodacao: Acomodacao, index: number) {
        this.acomodacao = acomodacao;
        this.index = index;
    }
    imprimir(): string {
        let descricao = `Índice: ${this.index}\n`
            + `Nomenclatura: ${this.acomodacao.NomeAcomadacao.toString()}\n`
            + `-- Quantidade de leitos para solteiros: ${this.acomodacao.CamaSolteiro}\n`
            + `-- Quantidade de leitos para casais: ${this.acomodacao.CamaCasal}\n`
            + `-- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}\n`
            + `-- Quantidade de garagens disponíveis: ${this.acomodacao.Garagem}\n`
            + `-- Quantidade de suites: ${this.acomodacao.Suite}\n`;
        return descricao;
    }

    private converterBooleano(valor: Boolean) {
        if (valor) {
            return `sim`
        } else {
            return `não`
        }
    }
}