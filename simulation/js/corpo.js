class Corpo {
    constructor(condicoesIniciais, largura, altura, cor = 'red') {
        this.largura = largura
        this.altura = altura
        this.cor = cor

        const { x, y } = condicoesIniciais
        this.x = x
        this.y = y
    }

    mover(x, y) {
        this.x = x
        this.y = y
    }

    posicao() {
        const { x, y } = this
        return { x, y }
    }
}