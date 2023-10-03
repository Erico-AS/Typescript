import fs from "fs"
import Municipio from "./Municipio.js"

export default class Municipio_factory {
    private _data: string = ""

    constructor(arquivo: string) {
        this._data = fs.readFileSync(arquivo, "utf-8")
    }

    private lerLinhas() {
        return this._data.split("\n")
    }

    private lerColunas(linha: string): string[] {
        return linha.split(',')
    }

    private criar(colunas: string[]) {
        if (!colunas[0]) {
            throw new Error()
        }

        const uf = colunas[0].trim()
        const nomeDoMuncipio = colunas[3].trim()
        const populacao = parseFloat(colunas[4].trim())

        return new Municipio(uf, nomeDoMuncipio, populacao)
    }

    get Municipios() {
        const municipios: Municipio[] = []
        let linhas = this.lerLinhas()

        for (let index = 1; index < linhas.length; index++) {
            let colunas = this.lerColunas(linhas[index])
            try {
                const municipio = this.criar(colunas)
                municipios.push(municipio)
            } catch (e) {}
        }

        return municipios
    }
}