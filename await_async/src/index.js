"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
function dobra(x) {
    return __awaiter(this, void 0, void 0, function* () {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                let dobra = x * 2;
            }, 5000);
        }).then((value) => {
            return dobra;
        });
    });
}
app.get("/dobra", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let numero = Number(req.query.numero);
    const resultado = yield dobra(numero);
    res.status(200).json({ "valor": `O dobro de ${numero} é ${resultado}` });
}));
app.listen(port, () => {
    console.log(`O server está sendo executado na porta ${port}`);
});
