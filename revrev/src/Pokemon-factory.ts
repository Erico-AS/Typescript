import fs from "fs"
import Pokemon from './models/Pokemon.js'

export default class Pokemonfactory {
    private data: string = ""

    constructor(file: string) {
        this.data = fs.readFileSync(file, "utf-8")
    }

    get Pokemons(): Pokemon[] {
        const result: Pokemon[] = []
        const linhas: string[] = this.lerLinhas()

        for (let index = 1; index < linhas.length; index++) {
            const colunas: string[] = this.gerarColunas(linhas[index])
            try {
                const pok = this.criarPokemon(colunas)
                result.push(pok)
            } catch (error) {}
            
        }
        return result
    }

    private lerLinhas() {
        return this.data.split("\n")
    }

    private gerarColunas(linhas: string) {
        return linhas.split(",")
    }

    private criarPokemon(colunas: string[]): Pokemon {
        if (colunas[0] === "") {
            throw new Error("Linhas inválida")
        } 
        const pokemon = new Pokemon(parseInt(colunas[0].trim()), colunas[1].trim(), parseInt(colunas[11].trim()), colunas[12].trim() === "TRUE")
        return pokemon
    }
}