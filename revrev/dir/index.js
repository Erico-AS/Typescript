"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_factory_1 = __importDefault(require("./Pokemon-factory"));
const pokemons = new Pokemon_factory_1.default("./data/pokemon.csv").Pokemons;
for (let pokemon of pokemons) {
    if (pokemon.geracao === 3 && pokemon.lendario) {
        const { nome, geracao } = pokemon;
        console.log(`O pokemon ${nome} é lendario da fase ${geracao}`);
    }
}
