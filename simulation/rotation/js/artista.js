class Artista {

    constructor() {
        this.canvas = document.querySelector("canvas")
        this.contexto = this.canvas.getContext('2d')
    }

    limparQuadro() {
        const alturaQuadro = this.canvas.clientHeight
            , larguraQuadro = this.canvas.clientWidth

        this.contexto.clearRect(0, 0, larguraQuadro, alturaQuadro);
    }

    dimensoesQuadro() {
        const { clientHeight: altura, clientWidth: largura } = this.canvas
        return { altura, largura }
    }

    desenhar(corpos) {
        const { contexto: c } = this

        corpos.forEach(corpo => {
            const { altura, largura, cor } = corpo
                , { r } = corpo.variaveisTranslacionais()
                , { theta } = corpo.variaveisRotacionais()

            // console.log(r.x, r.y, theta)

            c.save() 

            c.translate(r.x, r.y)
            c.rotate(theta)

            c.beginPath();
            c.rect(-largura / 2, -altura / 2, largura, altura);

            c.fillStyle = cor;
            c.fill();

            c.restore()
        })
    }

}