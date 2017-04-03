class Realidade {

    contructor(gravidade = 10) {
        this.g = gravidade
    }

    inserirCorpos(corpos) {
        corpos.forEach(corpo => this.corpos.push(corpo))
    }

    run() {

    }

}