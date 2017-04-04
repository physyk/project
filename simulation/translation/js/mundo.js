class Realidade {

    constructor({ gravidade = 10, altura, largura }) {
        this.g = gravidade
        this.dt = 1 / 60
        this.corpos = []
        this.alturaPeDireito = altura

        //coeficiente de restituicao com o chao
        this.e = 0.3
    }

    inserirCorpos(corpos) {
        corpos.forEach(corpo => this.corpos.push(corpo))
    }

    corrigirEfeitoPossivelColisao(corpo) {
        const { altura } = corpo.dimensoes()

        let { vy } = corpo.velocidade()
            , { y } = corpo.posicao()

        if (y + altura / 2 >= this.alturaPeDireito)
            vy *= - this.e

        corpo.transladar({ vy, y })
    }

    verlet({ y, vy }) {
        let { dt, g } = this
            , a = g

        y = y + vy * dt + 1 / 2 * a * Math.pow(dt, 2)
        vy = vy + 1 / 2 * (a + a)

        return { y, vy }
    }

    run() {

        this.corpos.forEach(corpo => {
            let { vy } = corpo.velocidade()
                , { y } = corpo.posicao()

            corpo.transladar(this.verlet({ y, vy }))
            realidade.corrigirEfeitoPossivelColisao(corpo)
        })
    }

}