class Corda {
    constructor({ pontoFixo }) {
        this.pontoFixo = pontoFixo
        this.extremidadeLivre = new Vetor(0, 0)
    }

    //forca que a corda puxa, e não puxada
    tensao(extremidadeLivre = this.extremidadeLivre) {
        const constanceArbitraria = 0.5
        return this.pontoFixo.distancia(extremidadeLivre).unitario().multiplicar(0.5)
    }

    posicionar(novaPosicao) {
        this.extremidadeLivre = novaPosicao
    }

}