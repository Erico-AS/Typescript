export default class Pokemon {
    private _id :number = 0.0
    private _nome : string = ""
    private _geracao : number = 0.00
    private _lendario : boolean = false

    constructor(id: number, nome: string, geracao: number, lendario: boolean) {
        this._id = id
        this._geracao = geracao
        this._lendario = lendario
        this._nome = nome
    }

    get id() {
        return this._id
    }

    get nome() {
        return this._nome
    }

    get lendario() {
        return this._lendario
    }

    get geracao() {
        return this._geracao
    }
}