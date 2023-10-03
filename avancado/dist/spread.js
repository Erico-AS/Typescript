"use strict";
const numeros = [1, 2, 3, 4, 5, 6];
const numb2 = [
    10,
    ...numeros,
    5
];
let copia = [...numeros];
copia.push(10);
console.log(copia);
const objeto = {
    nome: "Erico",
    idade: 17,
    end: "abc"
};
objeto.nome = "Erico Augusto";
console.log(JSON.stringify(objeto));
