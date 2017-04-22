class Corpo {
    constructor({ condicoesIniciais, dimensoes, corda, cor = 'red' }) {
        this.cor = cor
        this.gravidade = new Vetor(0, 9.8)
        this.massa = 1
        this.corda = corda

        const { largura, altura } = dimensoes
        this.largura = largura
        this.altura = altura
        this.braco = new Vetor(-largura / 2, -altura / 2)

        const { r, v } = condicoesIniciais
        this.r = r
        this.v = v

        this.theta = 0;
        this.omega = 0; 

        //TODO - CALCULAR
        this.inercia = 1 / 12 * this.massa * (Math.pow(altura, 2) + Math.pow(largura, 2))

        this.aceleracaoLinear = this.aceleracaoLinear.bind(this)
        this.aceleracaoRotacional = this.aceleracaoRotacional.bind(this)

    }

    dimensoes() {
        const { altura, largura } = this
        return { altura, largura }
    }

    transladar({ r, v }) {
        // 
        this.r = r
        this.v = v
    }

    rotacionar({ theta, omega }) {
        this.theta = theta
        this.omega = omega
    }

    peso() {
        return this.gravidade.multiplicar(this.massa)
    }

    extremidadeAmarrada(centroMassa) {
        centroMassa = centroMassa || this.r

        const extremidade = centroMassa.adicionar(this.braco)
        return extremidade.rotacionar(this.theta, centroMassa)
    }

    aceleracaoLinear(r) {
        const extremidade = this.extremidadeAmarrada(r)
            , tensao = this.corda.tensao(extremidade)

        return this.peso().adicionar(tensao).multiplicar(1 / this.massa)
    }

    aceleracaoRotacional() {
        const { r: centroMassa } = this
            , extremidade = this.extremidadeAmarrada()
            , tensao = this.corda.tensao(extremidade)
            , torque = extremidade.subtrair(centroMassa).produtoVetorial(tensao)

        return torque/this.inercia
    }

    variaveisTranslacionais() {
        // console.log(this.r)
        // console.log(this.r, this.v)
        const { r, v, aceleracaoLinear } = this
        return { r, v, a: aceleracaoLinear }
    }

    variaveisRotacionais() {
        const { theta, omega, aceleracaoRotacional } = this

        return { theta, omega, alpha: aceleracaoRotacional }
    }
}