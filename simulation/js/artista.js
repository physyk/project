class Artista {

    constructor() {
        this.canvas = document.querySelector("canvas")
        this.contexto = this.canvas.getContext('2d')

        this.desenharNivel();
    }

    desenharNivel() {
        const ctx = this.contexto

        ctx.beginPath();
        ctx.moveTo(0, 600);
        ctx.lineTo(600, 600);
        ctx.stroke();
    }

    limparQuadro() {
        const alturaQuadro = this.canvas.clientHeight
            , larguraQuadro = this.canvas.clientWidth

        this.contexto.clearRect(0, 0, larguraQuadro, alturaQuadro);
        this.desenharNivel();
    }

    dimensoesQuadro() {
        const { clientHeight: altura, clientWidth: largura } = this.canvas

        return { altura, largura }
    }

    desenhar(corpos) {
        const { contexto: c } = this

        corpos.forEach(corpo => {
            const { altura, largura, cor } = corpo
                , { x, y } = corpo.posicao()

            c.save()

            //sabemos que centro de massa do retangula corresponde ao seu geométrico
            c.translate(x + largura / 2, y + altura / 2)

            c.beginPath();
            c.rect(-largura / 2, -altura / 2, largura, altura);

            c.fillStyle = cor;
            c.fill();

            c.restore()
        })
    }

}