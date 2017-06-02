const initialConditions = {
    r0: 0,
    v0: 1,
    a0: acelerationCalculator(0),
}

const simulationInfo = {
    numberIterations: 165,
    timeStep: 0.01,
    initialConditions,
    acelerationCalculator
}

const { eulerData, verletData } = numericalSolution(simulationInfo)
    , realSolutionData = realSolution(simulationInfo)

var euler = {
    x: eulerData.t,
    y: eulerData.r,
    mode: 'markers',
    name: 'Euler'
};

var verlet = {
    x: verletData.t,
    y: verletData.r,
    mode: 'markers',
    name: 'Verlet'
};

var real = {
    x: realSolutionData.t,
    y: realSolutionData.r,
    mode: 'markers',
    name: 'Real Solution'
};

var data = [euler, real, verlet];

var layout = {
    title: 'Comparação Verlet vs Euler para um lançamento de projétil de 30m/s ',
    height: 700,
    width: 1000
};

Plotly.newPlot('myDiv', data, layout);

function acelerationCalculator(pastTime) {
    const t = pastTime
    return -(t ** 2 + t ** 5)
}

function realPosition(r0, v0, pastTime) {
    const t = pastTime
    return r0 + v0 * t - (t ** 4 / (3 * 4) + t ** 7 / (6 * 7))
}




function realSolution(simulationInfo) {

    const { numberIterations, initialConditions, timeStep } = simulationInfo
        , { r0, v0, a0 } = initialConditions

    let result = { r: [], t: [] }

    for (let i = 1; i <= numberIterations; i++) {
        const pastTime = timeStep * i

        result.r.push(realPosition(r0, v0, pastTime))
        result.t.push(pastTime)
    }


    return result
}

