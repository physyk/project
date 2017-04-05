class Realidade {

    constructor({ gravidade = 10, altura, largura }) {
        this.g = gravidade
        this.dt = 1 / 60
        this.corpos = []
    }

    inserirCorpos(corpos) {
        corpos.forEach(corpo => this.corpos.push(corpo))
    }

    verletVetorial(r, v, funcaoAceleracao) {
        let a = funcaoAceleracao(r), { dt } = this

        let termoVelocidade = v.multiplicar(dt)
            , termoAceleracao = a.multiplicar(Math.pow(dt, 2) * 1 / 2)

        r = r.adicionar(termoVelocidade).adicionar(termoAceleracao)

        termoAceleracao = a.adicionar(funcaoAceleracao(r)).multiplicar(1 / 2)
        v = v.adicionar(termoAceleracao)

        return { novaPosicao: r, novaVelocidade: v }
    }

    verletEscalar(p, v, funcaoAceleracao) {
        let a = funcaoAceleracao(p), { dt } = this

        p = x + v * dt + 1 / 2 * a * Math.pow(dt, 2)
        v = v + 1 / 2 * (a + funcaoAceleracao(p))

        return { novaPosicao: p, novaVelocidade: v }
    }

    transladarCorpos() {
        this.corpos.forEach(corpo => {
            let { r, v, a } = corpo.variaveisTranslacionais()

            const { novaPosicao, novaVelocidade } = this.verletVetorial(r, v, a)

            corpo.transladar({ r: novaPosicao, v: novaVelocidade })
        })
    }

    rotacionarCorpos() {
        this.corpos.forEach(corpo => {
            const { theta, omega, alpha } = corpo.variaveisRotacionais()

            const { novaPosicao: theta, novaVelocidade: omega } = this.verlet(theta, omega, alpha)

            corpo.rotacionar({ theta, omega })
        })
    }

    run() {
        this.transladarCorpos()
        this.rotacionarCorpos()
    }

}