const artista = new Artista()
    , { altura: alturaQuadro } = artista.dimensoesQuadro()

// corpo1
const dimensoes1 = { largura: 100, altura: 100 }
const condicoesIniciais1 = { r: new Vetor(50, 100), v: new Vetor(0, 0) }
const corda1 = new Corda({ pontoFixo: new Vetor(100, 0) })
const rec1 = new Corpo({
    dimensoes: dimensoes1,
    condicoesIniciais: condicoesIniciais1,
    cor: 'orange',
    corda: corda1
})

// corpo2
const dimensoes2 = { largura: 100, altura: 50 }
const condicoesIniciais2 = { r: new Vetor(50, 100), v: new Vetor(0, 0) }
const corda2 = new Corda({ pontoFixo: new Vetor(300, 0) })
const rec2 = new Corpo({
    dimensoes: dimensoes2,
     condicoesIniciais: condicoesIniciais2,
    cor: 'red',
    corda: corda2
})

const corpos = [rec1, rec2]

const realidade = new Realidade({ altura: alturaQuadro })
realidade.inserirCorpos(corpos)

function loop() {
    realidade.run();
    artista.limparQuadro();
    artista.desenhar(corpos)
}

setInterval(loop, 1000 / 60)


