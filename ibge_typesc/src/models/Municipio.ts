export default class Municipio {
    private _uf: string = "" 
    private _nomeDoMunicipio: string = "" 
    private _populacao: number = 0.00

    constructor(uf: string, nomeDoMunicipio: string, populacao: number) {
        this._uf = uf
        this._nomeDoMunicipio = nomeDoMunicipio
        this._populacao = populacao
    }

    get uf() {
        return this._uf.toUpperCase()
    }

    get nomeDoMunicipio() {
        return this._nomeDoMunicipio.toUpperCase()
    }

    get populacao() {
        return this._populacao
    }
}