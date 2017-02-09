function degToRad(deg) {
    return Math.PI / 180 * deg
}

function cos(deg) {
    return Math.cos(degToRad(deg))
}

function sin(deg) {
    return Math.sin(degToRad(deg))
}

function clone(object) {
    return Object.assign({}, object)
}


function verlet(r0, v0, aceleration, deltaT) {
    let r, v, a = aceleration(r0,v0)
    
    r = r0 + v0 * deltaT + a / 2 * Math.pow(deltaT, 2)
    v = v0 + (aceleration(r,v0) + a) / 2 * deltaT

    return { r, v }
}


function euler(r0, v0, aceleration, deltaT) {
    let r, v

    r = r0 + v0 * deltaT
    v = v0 + aceleration(r,v0) * deltaT

    return { r, v }
}


function simulation(simulationMethod, importInfo) {

    const {iterations, timeStep, initialConditions, acelerationX, acelerationY} = importInfo

    let lastSimulationData = clone(initialConditions)
        , simulationData = { x: [], y: [] }

    for (let i = 1; i <= iterations; i++) {

        const
            {r: rx, v: vx} = simulationMethod(lastSimulationData.r.x, lastSimulationData.v.x, acelerationX, timeStep)
            , {r: ry, v: vy} = simulationMethod(lastSimulationData.r.y, lastSimulationData.v.y, acelerationY, timeStep)
            , iterationData = {
                r: { x: rx, y: ry },
                v: { x: vx, y: vy }
            }

        simulationData.x.push(iterationData.r.x)
        simulationData.y.push(iterationData.r.y)

        lastSimulationData = clone(iterationData)

    }

    return simulationData


}


function numericalSolution(simulationInitialInfo){

    const eulerData = simulation(euler, simulationInitialInfo)
        , verletData = simulation(verlet, simulationInitialInfo)

    return { eulerData, verletData }

}