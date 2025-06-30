import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDependente from "./impressorDependente";

export default class ImpressorDependentes implements Impressor {
    private dependentes: Cliente[];

    constructor(dependentes: Cliente[]) {
        this.dependentes = dependentes;
    }

    imprimir(): string {
        let impressao = "";

        for (let index = 0; index < this.dependentes.length; index++) {
            const dependente = this.dependentes[index];
            const impressorDependente = new ImpressorDependente(dependente);
            impressao += impressorDependente.imprimir();

            if (index !== this.dependentes.length - 1) {
                impressao += "\n----------------------------\n";
            }
        }

        return impressao;
    }
}
