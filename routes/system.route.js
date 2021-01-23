const express = require('express');
const router = express.Router();
const Controller = require('../controller/System.controller');

router.get('/uptime', (req, res) => {
	Controller.handleGetUptime(req, res);
});

router.get('/platform', (req, res) => {
	Controller.handleGetPlatform(req, res);
});

router.get('/memory', (req, res) => {
	Controller.handleGetMemory(req, res);
});

router.get('/cpus', (req, res) => {
	Controller.handleGetCpus(req, res);
});

module.exports = router;
