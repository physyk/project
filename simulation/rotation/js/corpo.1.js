class Corpo {
    constructor({ condicoesIniciais, dimensoes, corda, cor = 'red' }) {
        this.cor = cor
        this.gravidade = new Vector(0, 9.8)
        this.massa = 1
        this.corda = corda

        const { largura, altura } = dimensoes
        this.largura = largura
        this.altura = altura

        const { x, y, vy, vx } = condicoesIniciais
        this.r = new Vector(x, y)
        this.v = new Vector(vx, vy)

        this.corda.posicionar(this.extremidadeAmarrada())
    }

    dimensoes() {
        const { altura, largura } = this
        return { altura, largura }
    }

    transladar({ r, v }) {
        this.corda.posicionar(this.extremidadeAmarrada(r))
        this.r = r
        this.v = v
    }

    rotacionar({ theta, omega }) {
        this.theta = theta
        this.omega = omega
    }

    pegarCorda() {
        return this.corda
    }

    extremidadeAmarrada(r) {
        const { largura, altura } = this.dimensoes()
            , { x, y } = r || this.r

        //a extremidade amarrada sera sempre a ponta esquerda no topo.    
        return new Vetor(x - largura / 2, y - altura / 2)
    }

    aceleracaoLinear(r) {
        const novaExtremidade = this.extremidadeAmarrada(r)

        const aceleracaoCorda = this.corda.tensao(novaExtremidade).multiplicar(1 / this.m)
        return this.gravidade.adicionar(aceleracaoCorda)
    }

    aceleracaoRotacional(r) {
        const novaExtremidade = this.extremidadeAmarrada(r)

        const torque = novaExtremidade.subtrair(r).produtoVetorial(this.corda.tensao(novaExtremidade))
            , momentoDeInercia = this.momentoDeInercia()

        return torque / momentoDeInercia
    }

    variaveisTranslacionais() {
        const { r, v, aceleracaoLinear } = this
        return { r, v, a: aceleracaoLinear }
    }

    variaveisRotacionais() {
        const { theta, omega, aceleracaoRotacional } = this

        return { theta, omega, alpha: this.aceleracaoRotacional }
    }
}