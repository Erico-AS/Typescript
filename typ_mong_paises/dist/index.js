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
const db_1 = __importDefault(require("./db"));
const Pais_1 = __importDefault(require("./models/Pais"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let conn = null;
    let arrayPaises = [
        new Pais_1.default("Brasil", 210),
        new Pais_1.default("Peru", 432),
        new Pais_1.default("Argentina", 124),
        new Pais_1.default("Venezuela", 756),
        new Pais_1.default("Colombia", 234),
    ];
    try {
        conn = yield (0, db_1.default)();
        const bd = conn.db();
        const paises = bd.collection("paises");
        for (let pais of arrayPaises) {
            yield paises.insertOne(pais);
        }
    }
    catch (error) {
        console.log(error);
    }
    finally {
        conn === null || conn === void 0 ? void 0 : conn.close();
    }
});
main();
