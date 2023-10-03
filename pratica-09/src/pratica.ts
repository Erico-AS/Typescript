const arrow = (a: number, b: number): number => a + b;

type recebe = (arrow() : Number => Number) => Number

function printar(recebe:recebe, a:Number, b:Number) {
    console.log(a,b)
}

let arrow