import readlinesync = require("readline-sync");

export function main() {
    let opcao: number;

    while (true) {


        console.log("");
        console.log("");
        console.log("            BANCO DO BRAZIL COM Z          ");
        console.log("");
        console.log("");
        console.log("");
        console.log("        1 - Criar Conta                    ");
        console.log("        2 - Listar todas as Contas         ");
        console.log("        3 - Buscar Conta por Numero        ");
        console.log("        4 - Atualizar Dados da Conta       ");
        console.log("        5 - Apagar Conta                   ");
        console.log("        6 - Sacar                          ");
        console.log("        7 - Depositar                      ");
        console.log("        8 - Transferir Valores entre Contas");
        console.log("        9 - Sair                           ");
        console.log("");
        console.log("");
        console.log("");

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt(" ");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\nListar todas as Contas\n")

                break;

            case 3:
                console.log("\nBuscar Conta por Numero\n")

                break;

            case 2:
                console.log("\nAtualizar Dados da Conta\n")

                break;

            case 2:
                console.log("\nApagar Conta\n")

                break;

            case 2:
                console.log("\nSacar\n")

                break;

            case 2:
                console.log("\nDepositar\n")

                break;

            case 2:
                console.log("\nTranferir valores entre Contas\n")

                break;
            default:
                console.log("\nOpcao Invalida\n")

                break;

        }
    }
}

export function sobre(): void {
    console.log("              *           ");
    console.log("Projeto desenvolvido por: ");
    console.log("    Andressa Oliveira     ");
    console.log("              *           ");
}