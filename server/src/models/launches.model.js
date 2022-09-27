const launches = new Map();

let lastestFlightNumber = 100;

const launch = {
	flightNumber: 100,
	mission: 'Test Launches Model',
	rocket: 'Test Rocket',
	launchDate: new Date('December 27, 2030'),
	destination: 'Kepler-442 b',
	customer: ['Nhi', 'Vo'],
	upcoming: true,
	success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
	return Array.from(launches.values());
}

function addNewLaunch(launch) {
	lastestFlightNumber++;
	launches.set(
		lastestFlightNumber,
		Object.assign(launch, {
			success: true,
			upcoming: true,
			flightNumber: lastestFlightNumber,
			customer: ['Nhi Vo', 'Vo Nhi'],
		})
	);
}

module.exports = {
	getAllLaunches,
	addNewLaunch,
}