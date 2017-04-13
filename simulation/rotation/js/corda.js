class Corda {
    constructor({ pontoFixo }) {
        this.pontoFixo = pontoFixo
        this.extremidadeLivre = new Vetor(0, 0)
    }

    tensao(extremidadeLivre) {
        const constanceArbitraria = 0.5
            , distancia = extremidadeLivre.subtrair(this.pontoFixo)

        return distancia.unitario().multiplicar(0.5)
    }


}