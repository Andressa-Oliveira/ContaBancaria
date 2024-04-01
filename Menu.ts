const readlinesync = require("readline-sync");

import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaControle } from "./src/controle/ContaControle";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    // Instância da Classe ContaController
    const contas: ContaControle = new ContaControle();

    // Instância da Classe Conta Corrente 
    // Adicionada na Collection listaContas
    const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 456, 1, "Yasmine Lamark", 500000, 1000)
    contas.cadastrar(contaCorrente);

    // Instância da da Classe ContaPoupanca
    // Adicionada na Collection listaContas
    const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Victor", 1000, 10);
    contas.cadastrar(contaPoupanca);

    while (true) {

    
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*************************************");
        
         

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
       
                ("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
               
                console.log("\n\nCriar Conta\n\n");

                console.log("Digite o Número da Agência: ")
                agencia = readlinesync.questionInt("")

                console.log("Digite o Nome do Titular: ")
                titular = readlinesync.question("")

                console.log("Informe o tipo da Conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1

                console.log("Digite o Saldo da Conta: ")
                saldo = readlinesync.questionFloat("")

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ")
                        limite = readlinesync.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log("Digite o dia do aniversário da Conta: ")
                        aniversario = readlinesync.questionInt("")
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if (conta !== null) {

                    console.log("Digite o Número da Agência: ")
                    agencia = readlinesync.questionInt("")

                    console.log("Digite o Nome do Titular: ")
                    titular = readlinesync.question("")

                    tipo = conta.tipo

                    console.log("Digite o Saldo da Conta: ")
                    saldo = readlinesync.questionFloat("")

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta: ")
                            limite = readlinesync.questionFloat("")
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log("Digite o dia do aniversário da Conta: ")
                            aniversario = readlinesync.questionInt("")
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                    }else {
                        console.log("A Conta não foi encontrada")
                    }

                    keyPress()
                    break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o Número da Conta: ")
                numero = readlinesync.questionInt("")

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida\n");

                keyPress()
                break;
        }
    }

}


function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Andressa Oliveira");
    console.log("dressoliver@gmail.com");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();