const artista = new Artista()


const rec1 = new Corpo({ x: 0, y: 0, vy: 0 }, 100, 100, 'orange')
const rec2 = new Corpo({ x: 600, y: 650, vy: 0 }, 100, 50, 'red')
const corpos = [rec1, rec2]

console.log(artista.dimensoesQuadro().altura)

const realidade = new Realidade({ altura: artista.dimensoesQuadro().altura })

realidade.inserirCorpos(corpos)

function loop() {
    // realidade.run();

    artista.limparQuadro();
    artista.desenhar(corpos)
}

loop()

// set  Interval(loop, 1000 / 60)


