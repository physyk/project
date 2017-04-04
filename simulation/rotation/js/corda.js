class Corda {
    constructor({ pontoFixo }) {
        this.pontoFixo = pontoFixo
    }

    tensao(extremidadeLivre) {
        const constanceArbitraria = 0.5
        return this.pontoFixo.distancia(extremidadeLivre).unitario().multiplicar(0.5)
    }
}