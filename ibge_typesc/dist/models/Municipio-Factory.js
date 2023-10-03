"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Municipio_js_1 = __importDefault(require("./Municipio.js"));
class Municipio_factory {
    constructor(arquivo) {
        this._data = "";
        this._data = fs_1.default.readFileSync(arquivo, "utf-8");
    }
    lerLinhas() {
        return this._data.split("\n");
    }
    lerColunas(linha) {
        return linha.split(',');
    }
    criar(colunas) {
        if (!colunas[0]) {
            throw new Error();
        }
        const uf = colunas[0].trim();
        const nomeDoMuncipio = colunas[3].trim();
        const populacao = parseFloat(colunas[4].trim());
        return new Municipio_js_1.default(uf, nomeDoMuncipio, populacao);
    }
    get Municipios() {
        const municipios = [];
        let linhas = this.lerLinhas();
        for (let index = 1; index < linhas.length; index++) {
            let colunas = this.lerColunas(linhas[index]);
            try {
                const municipio = this.criar(colunas);
                municipios.push(municipio);
            }
            catch (e) { }
        }
        return municipios;
    }
}
exports.default = Municipio_factory;
