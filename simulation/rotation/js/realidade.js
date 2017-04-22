class Realidade {

    constructor({ gravidade = 10, altura, largura }) {
        this.g = gravidade
        this.corpos = []
        this.algoritmos = new Algoritmos()
    }

    inserirCorpos(corpos) {
        corpos.forEach(corpo => this.corpos.push(corpo))
    }

    transladarCorpos() {
        this.corpos.forEach(corpo => {
            let { r, v, a } = corpo.variaveisTranslacionais()

            const { novaPosicao, novaVelocidade } = this.algoritmos.verlet(r, v, a)

            corpo.transladar({ r: novaPosicao, v: novaVelocidade })
        })
    }

    rotacionarCorpos() {
        this.corpos.forEach(corpo => {
            const { theta, omega, alpha } = corpo.variaveisRotacionais()

            const euler = this.algoritmos.euler(theta, omega, alpha)

            corpo.rotacionar({ theta: euler.p, omega: euler.v })
        })
    }

    run() {
        this.transladarCorpos()
        this.rotacionarCorpos()
    }

}

class Algoritmos {

    constructor() {
        this.dt = 1 / 60
    }

    verlet(r, v, funcaoAceleracao) {

        let a = funcaoAceleracao(r), { dt } = this

        let termoVelocidade = v.multiplicar(dt)
            , termoAceleracao = a.multiplicar(Math.pow(dt, 2) * 1 / 2)

        r = r.adicionar(termoVelocidade).adicionar(termoAceleracao)

        termoAceleracao = a.adicionar(funcaoAceleracao(r)).multiplicar(1 / 2)
        v = v.adicionar(termoAceleracao)

        return { novaPosicao: r, novaVelocidade: v }
    }

    euler(p, v, funcaoAceleracao) {

        let a = funcaoAceleracao(), { dt } = this

        v = v + a * dt
        p = p + v * dt

        return { p, v }
    }
}