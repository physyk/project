
class Vetor {

    constructor(x,y){
        this.x = x
        this.y = y
    }

    rotacionar(angulo, centro) {

        centro = centro || new Vetor(0, 0)

        const sin = Math.sin(angulo)
            , cos = Math.cos(angulo)

        let {x, y} = this.distancia(centro)

        x = centro.x + (x * cos - y * sin)
        y = centro.y + (x * sin + y * cos)

        return new Vetor(x,y)
    }


    distancia(referencia) {
        const x = this.x - referencia.x
            , y = this.y - referencia.y

        return new Vetor(x, y)
    }

    adicionar(vetor) {
        const x = this.x + vetor.x
            , y = this.y + vetor.y

        return new Vetor(x, y)

    }

    subtrair(vetor){
        const x = this.x - vetor.x
            , y = this.y - vetor.y

        return new Vetor(x, y) 
    }

    produtoVetorial(vetor) {
        const {x, y} = this
        return x * vetor.y - y * vetor.x
    }

    multiplicar(escalar) {
        const x = this.x * escalar
            , y = this.y * escalar

        return new Vetor(x, y)
    }

    comprimento() {
        const xSquare = Math.pow(this.x, 2)
            , ySquare = Math.pow(this.y, 2)

        return Math.sqrt(xSquare + ySquare)
    }

    unitario(){
        const comprimento = this.comprimento()
        return this.multiplicar(1/comprimento)
    }

}