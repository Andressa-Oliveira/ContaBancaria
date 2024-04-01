export class Conta {
    //[modificador_de_visibilidade] nome_do_atributo: tipo_de_dado
    //atributos devem ser PRIVATE
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;
    
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    /*métodos devem ser PUBLIC, porque por eles se acessa
    e modifica os atributos*/
    public get numero(): number {
        return this._numero;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get titular(): string {
        return this._titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set titular(value: string) {
        this._titular = value;
    }

    public set saldo(value: number) {
        this._saldo = value;
    }

    //criar 3 Métodos Auxiliares: sacar, depositar e visualizar:

    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log("\nSaldo insuficiente");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor
    }


    public visualizar(): void {
        let tipo: string = "";

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
        console.log(`No.: da Conta: ${this._numero}`);
        console.log(`Ag.: ${this._agencia}`);
        console.log(`Tipo da conta: ${this._tipo}`);
        console.log(`Titular: ${this._titular}`);
        console.log("Saldo: R$" + this._saldo.toFixed(2));
    }
}
