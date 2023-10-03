class Jato implements Aviao {
    public velocidade: number = 0.00
    public nome: string = ""

    decolar(): boolean {
        this.velocidade == 0 ? this.velocidade += 10 : console.log("Impossivel decolar")
        return true
    }

    acelerar(): number {
        this.velocidade >= 200 ? this.velocidade += 10 : console.log("Não decolado")
        return this.velocidade
    }

    desacelerar(): number {
        this.velocidade <= 200 ? this.velocidade -= 10 : this.pousar()
        return this.velocidade
    }

    pousar(): boolean {
        this.decolar() == true ? this.velocidade = 0 : console.log("Impossivel decolar")
        return true
    }
}