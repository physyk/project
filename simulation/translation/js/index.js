const artista = new Artista()
const { altura: alturaQuadro } = artista.dimensoesQuadro()

const rec1 = new Corpo({ x: 50, y: 100, vy: 0 }, 100, 100, 'orange')
const rec2 = new Corpo({ x: 500, y: 400, vy: 0 }, 100, 50, 'red')
const corpos = [rec1, rec2]

const realidade = new Realidade({ altura: alturaQuadro })
realidade.inserirCorpos(corpos)

function loop() {
    realidade.run();
    artista.limparQuadro();
    artista.desenhar(corpos)
}

setInterval(loop, 1000 / 60)


