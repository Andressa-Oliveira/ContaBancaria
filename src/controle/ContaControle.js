"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaControle = void 0;
var ContaControle = /** @class */ (function () {
    function ContaControle() {
        // Collection Array que aramzenará os Objetos das Classes
        // ContaCorrente e ContaPoupanca
        this.listaContas = new Array();
        // Atributo que será utilizado para controlar o numero das
        // contas
        this.numero = 0;
    }
    ContaControle.prototype.procurarPorNumero = function (numero) {
        var buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log("\nConta não foi Encontrada!");
    };
    // Método para Listar os dados de todas as Contas
    // inseridas na Collection listaContas
    ContaControle.prototype.listarTodas = function () {
        for (var _i = 0, _a = this.listaContas; _i < _a.length; _i++) {
            var conta = _a[_i];
            conta.visualizar();
        }
    };
    // Método para adicionar Objrtos das Classes 
    // ContaCorrente e ContaPoupanca
    // na Collection listaContas
    ContaControle.prototype.cadastrar = function (conta) {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!");
    };
    ContaControle.prototype.atualizar = function (conta) {
        var buscaConta = this.buscarNoArray(conta.numero);
        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("A Conta n\u00FAmero ".concat(conta.numero, " foi Atualizada com \u00EAxito!"));
        }
        else
            console.log("\nConta não foi Encontrada!");
    };
    ContaControle.prototype.deletar = function (numero) {
        var buscaConta = this.buscarNoArray(numero);
        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A Conta n\u00FAmero ".concat(numero, " foi Exclu\u00EDda com \u00EAxito!"));
        }
        else
            console.log("\nConta não foi Encontrada!");
    };
    ContaControle.prototype.sacar = function (numero, valor) {
        throw new Error("Method not implemented.");
    };
    ContaControle.prototype.depositar = function (numero, valor) {
        throw new Error("Method not implemented.");
    };
    ContaControle.prototype.transferir = function (numeroOrigem, numeroDestino, valor) {
        throw new Error("Method not implemented.");
    };
    // Métodos Auxiliares
    ContaControle.prototype.gerarNumero = function () {
        return ++this.numero;
    };
    ContaControle.prototype.buscarNoArray = function (numero) {
        for (var _i = 0, _a = this.listaContas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero === numero)
                return conta;
        }
        return null;
    };
    return ContaControle;
}());
exports.ContaControle = ContaControle;
