"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Municipio {
    constructor(uf, nomeDoMunicipio, populacao) {
        this._uf = "";
        this._nomeDoMunicipio = "";
        this._populacao = 0.00;
        this._uf = uf;
        this._nomeDoMunicipio = nomeDoMunicipio;
        this._populacao = populacao;
    }
    get uf() {
        return this._uf.toUpperCase();
    }
    get nomeDoMunicipio() {
        return this._nomeDoMunicipio.toUpperCase();
    }
    get populacao() {
        return this._populacao;
    }
}
exports.default = Municipio;
