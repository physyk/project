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


function verlet(r0, v0, newAceleration, deltaT, lastAceleration) {
	let r = r0 + v0 * deltaT + lastAceleration / 2 * deltaT ** 2
		, v = v0 + (lastAceleration + newAceleration) / 2 * deltaT

	return { r, v }
}


function euler(r0, v0, newAceleration, timeStep) {
	let r, v

	r = r0 + v0 * timeStep
	v = v0 + newAceleration * timeStep

	return { r, v }
}


function simulation(simulationMethod, importInfo) {

	const { numberIterations, timeStep, initialConditions, acelerationCalculator } = importInfo

	let lastSimulationData = clone(initialConditions)
		, simulationData = { r: [], t: [] }

	for (let i = 1; i <= numberIterations; i++) {
		pastTime = i * timeStep

		let newAceleration = acelerationCalculator(pastTime)

		const { r0, v0, a0 } = lastSimulationData
			, { r, v } = simulationMethod(r0, v0, newAceleration, timeStep, a0)

		simulationData.r.push(r)
		simulationData.t.push(pastTime)

		lastSimulationData = { r0: r, v0: v, a0: newAceleration }
	}

	return simulationData
}


function numericalSolution(simulationInfo) {

	const eulerData = simulation(euler, simulationInfo)
		, verletData = simulation(verlet, simulationInfo)

	return { eulerData, verletData }

}