const http = require('http');

require('dotenv').config();

const app = require('./app');

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

async function startServer() {
	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`Server is listening on ${PORT}`);
	});
}

startServer();


