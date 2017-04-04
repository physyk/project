class Corpo {
    constructor({condicoesIniciais, dimensoes, corda, cor = 'red'}) {
        this.cor = cor
        this.gravidade = new Vector(0,9.8)
        this.massa = 1
        this.corda = corda

        const {largura, altura} = dimensoes
        this.largura = largura
        this.altura = altura
                
        const { x, y, vy, vx } = condicoesIniciais        
        this.r = new Vector(x,y)
        this.v = new Vector(vx, vy)
    }

    dimensoes() {
        const { altura, largura } = this
        return { altura, largura }
    }

    transladar({r,v}) {
        this.r = r
        this.v = v
    }

    rotacionar({theta, omega}){
        this.theta = theta
        this.omega = omega
    }

    extremidadeAmarrada(centroMassa){
        const {largura, altura} = this.dimensoes()
            , {x,y} = this.r

        //a extremidade amarrada sera sempre a ponta esquerda no topo.    
        return new Vetor(x-largura/2, y-altura/2)
    }

    aceleracaoLinear(r){
        const o = this.extremidadeAmarrada(r)
        const aceleracaoCorda = this.corda.tensao(o).multiplicar(1/this.massa)
        return this.gravidade.adicionar(aceleracaoCorda)
    }

    variaveisTranslacionais(){
       const {r,v, aceleracaoLinear} = this       
       return {r,v, a: aceleracaoLinear}
    }

    variaveisRotacionais(){
        return {
            theta:0,
            omega:0,
            alpha: function(){return 0}
        }
    }
}