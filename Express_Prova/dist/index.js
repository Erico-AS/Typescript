"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.get("/", (req, answer) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    answer.status(200).json({ msg: `O meu nome é ${nome} e minha idade é ${idade}` });
});
app.get("/soma", (req, res) => {
    let { num1, num2, nome } = req.query;
    let soma = 0;
    let mult = 0;
    if (typeof num1 == "string" && typeof num2 == "string") {
        soma = Number(num1) + Number(num2);
        mult = Number(num1) * Number(num2);
    }
    if (typeof nome == "string") {
        nome = nome.toUpperCase();
    }
    res.status(200).json({ resulatado: `A soma deu ${soma} e a multiplicação ${mult}`, msg: `O nome é ${nome}` });
});
app.listen(port, () => {
    console.log(`O server está sendo executado na porta ${port}`);
});
