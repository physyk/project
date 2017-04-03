const artista = new Artista()

const rec1 = new Corpo(100, 100, 'orange')
const rec2 = new Corpo(100, 50, 'red')
const corpos = [rec1, rec2]

realidade.inserirCorpos(corpos)

function loop() {
    realidade.run();

    artista.limparQuadro();
    artista.desenhar(corpos)
}

setInterval(loop, 1000 / 60)


