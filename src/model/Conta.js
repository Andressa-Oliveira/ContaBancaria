"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, agencia, tipo, titular, saldo) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        /*métodos devem ser PUBLIC, porque por eles se acessa
        e modifica os atributos*/
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "agencia", {
        get: function () {
            return this._agencia;
        },
        set: function (value) {
            this._agencia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "titular", {
        get: function () {
            return this._titular;
        },
        set: function (value) {
            this._titular = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (value) {
            this._saldo = value;
        },
        enumerable: false,
        configurable: true
    });
    //criar 3 Métodos Auxiliares: sacar, depositar e visualizar:
    Conta.prototype.sacar = function (valor) {
        if (this._saldo < valor) {
            console.log("\nSaldo insuficiente");
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.visualizar = function () {
        var tipo = "";
        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupanca";
                break;
        }
        console.log("   *   ");
        console.log("Dados da Conta: ");
        console.log("   *   ");
        console.log("No.: da Conta: ".concat(this._numero));
        console.log("Ag.: ".concat(this._agencia));
        console.log("Tipo da conta: ".concat(this._tipo));
        console.log("Titular: ".concat(this._titular));
        console.log("Saldo: R$" + this._saldo.toFixed(2));
    };
    return Conta;
}());
exports.Conta = Conta;
