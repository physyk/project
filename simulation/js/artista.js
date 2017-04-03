class Artista {

    constructor() {
        this.canvas = document.querySelector("canvas")
        this.contexto = this.canvas.getContext('2d')
    }

    limparQuadro() {
        const alturaQuadro = canvas.clientHeight
            , larguraQuadro = canvas.clientWidth

        this.contexto.clearRect(0, 0, larguraQuadro, alturaQuadro);
    }

    desenhar(corpos) {
        const { contexto: c } = this

        corpos.forEach(corpo => {
            const { altura, largura, cor } = corpo
                , { x, y } = corpo.posicao()

            c.save()

            //sabemos que centro de massa do retangula corresponde ao seu geométrico
            c.translate(largura / 2, altura / 2)

            c.beginPath();
            c.rect(x, y, altura, largura);

            c.fillStyle = cor;
            c.fill();

            c.restore()
        })
    }

}