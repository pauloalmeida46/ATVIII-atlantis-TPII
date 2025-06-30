import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.log(`----------MENU----------`)
        console.log(`1 - Cadastrar cliente`)
        console.log(`2 - Editar cliente`)
        console.log(`3 - Listar cliente(s)`)
        console.log(`4 - Excluir cliente`)
        console.log(`------------------------`)
        console.log(`5 - Listar acomodações`)
        console.log(`6 - Registrar hóspede`)
        console.log(`7 - Listar clientes hospedados`)
        console.log(`8 - Finalizar hospedagem`)
        console.log(`------------------------`)
        console.log(`0 - Sair`)
        console.log(`------------------------`)
    }
}