"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pokemon {
    constructor(id, nome, geracao, lendario) {
        this._id = 0.0;
        this._nome = "";
        this._geracao = 0.00;
        this._lendario = false;
        this._id = id;
        this._geracao = geracao;
        this._lendario = lendario;
        this._nome = nome;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get lendario() {
        return this._lendario;
    }
    get geracao() {
        return this._geracao;
    }
}
exports.default = Pokemon;
