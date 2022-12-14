const {getAllLaunches, addNewLaunch, abortLaunchById} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.target || !launch.launchDate) {
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }

    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    addNewLaunch(launch);
    res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    if (isNaN(launchId)) {
        return res.status(400).json({
            error: 'Invalid launch ID',
        });
    }

    const aborted = abortLaunchById(launchId);

    if (!aborted) {
        return res.status(400).json({
            error: 'Launch not found',
        });
    }

    res.status(200).json(aborted);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}