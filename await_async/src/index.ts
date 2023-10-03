import express, { Request, Response } from "express"

const port = 3000
const app = express()

async function dobra(x: number) : Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(x*2)}, 5000)
    })
}

app.get("/dobra", async (req: Request, res: Response) => {
    let numero = Number(req.query.numero)
    const resultado = await dobra(numero)
    

    res.status(200).json({"valor":`O dobro de ${numero} é ${resultado}`})
})

app.listen(port, () => {
    console.log(`O server está sendo executado na porta ${port}`)
})