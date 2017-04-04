verlet(x,v, funcaoAceleracao) {                   
        let a = funcaoAceleracao(x), {dt} = this

        x = x + v * dt + 1 / 2 * a * Math.pow(dt, 2)
        v = v + 1 / 2 * (a + funcaoAceleracao(x))

        return { x, v }
    }