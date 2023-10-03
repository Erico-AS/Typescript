"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Municipio_Factory_1 = __importDefault(require("./models/Municipio-Factory"));
try {
    const municipios = new Municipio_Factory_1.default("./data/ibge-municipios.csv").Municipios;
    let populacaoTotal = 0.00;
    let populacaoMg = 0.00;
    let populacaoBh = 0.00;
    for (const municipio of municipios) {
        populacaoTotal += municipio.populacao;
        municipio.uf == "MG" ? populacaoMg += municipio.populacao : null;
        municipio.nomeDoMunicipio == "BELO HORIZONTE" ? populacaoBh = municipio.populacao : null;
    }
    console.log(`População total do Brasil é ${populacaoTotal}.` + '\n' +
        `População total de Minas Gerais é ${populacaoMg}.` + '\n' +
        `População total de Belo Horizonte é ${populacaoBh}.` + '\n' +
        `Percentual da população de Minas Gerais em relação a população do Brasil é ${populacaoMg * 100 / populacaoTotal}%.`);
}
catch (error) {
    console.log(error);
}
