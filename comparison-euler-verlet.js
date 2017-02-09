function acelerationX(x,v) {    
    return 0
}

function acelerationY(y,v) {
    return -9.81
}

function realSolution(simulationInfo){

    const {iterations, initialConditions, acelerationY, timeStep} = simulationInfo

    const {r, v} = initialConditions
        , {x: x0, y: y0} = r
        , {x: vx0, y: vy0} = v
    
    let result = {x:[], y:[]}

    for (let i = 1; i <= iterations; i++) {

        const t = timeStep * i

        let x, y

        x = x0 + vx0 * t
        y = y0 + vy0 * t + acelerationY() / 2 * Math.pow(t, 2)

        result.x.push(x)
        result.y.push(y)
    }


    return result
}



const initialConditions = {
    r: {
        x: 0,
        y: 0
    },
    v: {
        x: 10 * cos(30),
        y: 10 * sin(30)
    }
}



const simulationInfo = {
    iterations: 100,
    timeStep: 0.01,
    initialConditions,
    acelerationX,
    acelerationY
}

const {eulerData, verletData, realDataArray} = numericalSolution(simulationInfo)
      , realSolutionData = realSolution(simulationInfo)  

var trace2 = {
    x: eulerData.x,
    y: eulerData.y,
    mode: 'markers',
    name: 'Euler'
};

var trace3 = {
    x: verletData.x,
    y: verletData.y,
    mode: 'markers',
    name: 'Verlet'
};

var trace4 = {
    x: realSolutionData.x,
    y: realSolutionData.y,
    mode: 'markers',
    name: 'Real Solution'
};

var data = [trace2, trace3, trace4];

var layout = {
    title: 'Comparação Verlet Vs Euler para um lançamento de projétil de 30m/s ',
    height: 700,
    width: 1000
};

Plotly.newPlot('myDiv', data, layout);



