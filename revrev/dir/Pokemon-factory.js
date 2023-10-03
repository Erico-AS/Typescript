"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Pokemon_js_1 = __importDefault(require("./models/Pokemon.js"));
class Pokemonfactory {
    constructor(file) {
        this.data = "";
        this.data = fs_1.default.readFileSync(file, "utf-8");
    }
    get Pokemons() {
        const result = [];
        const linhas = this.lerLinhas();
        for (let index = 1; index < linhas.length; index++) {
            const colunas = this.gerarColunas(linhas[index]);
            try {
                const pok = this.criarPokemon(colunas);
                result.push(pok);
            }
            catch (error) { }
        }
        return result;
    }
    lerLinhas() {
        return this.data.split("\n");
    }
    gerarColunas(linhas) {
        return linhas.split(",");
    }
    criarPokemon(colunas) {
        if (colunas[0] === "") {
            throw new Error("Linhas inválida");
        }
        const pokemon = new Pokemon_js_1.default(parseInt(colunas[0].trim()), colunas[1].trim(), parseInt(colunas[11].trim()), colunas[12].trim() === "TRUE");
        return pokemon;
    }
}
exports.default = Pokemonfactory;
