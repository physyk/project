class Corpo {
    constructor(condicoesIniciais, largura, altura, cor = 'red') {
        this.largura = largura
        this.altura = altura
        this.cor = cor

        const { x, y, vy, vx } = condicoesIniciais
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    dimensoes() {
        const { altura, largura } = this
        return { altura, largura }
    }

    transladar({y, vy}) {
        this.y = y
        this.vy = vy
    }

    posicao() {
        const { x, y } = this
        return { x, y }
    }

    velocidade() {
        const { vx, vy } = this
        return { vx, vy }
    }
}