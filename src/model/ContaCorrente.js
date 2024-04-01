"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
var Conta_1 = require("./Conta");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, agencia, tipo, titular, saldo, limite) {
        var _this = _super.call(this, numero, agencia, tipo, titular, saldo) || this;
        _this._limite = limite;
        return _this;
    }
    Object.defineProperty(ContaCorrente.prototype, "limite", {
        /**
         * Getter limite
         * @return {number}
         */
        get: function () {
            return this._limite;
        },
        /**
         * Setter limite
         * @param {number} value
         */
        set: function (value) {
            this._limite = value;
        },
        enumerable: false,
        configurable: true
    });
    // Método Sacar
    ContaCorrente.prototype.sacar = function (valor) {
        if ((this.saldo + this._limite) >= valor) {
            this.saldo = this.saldo - valor;
            return true;
        }
        console.log("\nSaldo insuficiente!");
        return false;
    };
    ContaCorrente.prototype.visualizar = function () {
        _super.prototype.visualizar.call(this);
        console.log("Limite da Conta Corrente: " + this._limite);
    };
    return ContaCorrente;
}(Conta_1.Conta));
exports.ContaCorrente = ContaCorrente;
