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
exports.ContaPoupanca = void 0;
var Conta_1 = require("./Conta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario) {
        var _this = _super.call(this, numero, agencia, tipo, titular, saldo) || this;
        _this._aniversario = aniversario;
        return _this;
    }
    Object.defineProperty(ContaPoupanca.prototype, "aniversario", {
        get: function () {
            return this._aniversario;
        },
        set: function (aniversario) {
            this._aniversario = aniversario;
        },
        enumerable: false,
        configurable: true
    });
    ContaPoupanca.prototype.visualizar = function () {
        _super.prototype.visualizar.call(this);
        console.log("Dia do aniversário: " + this._aniversario);
    };
    return ContaPoupanca;
}(Conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
