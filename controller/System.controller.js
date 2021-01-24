const SystemModel = require('../model/System.model');

const Systemcontroller = {
	handleGetUptime(req, res) {
		try {
			const System = new SystemModel();
			const uptime = System.getUptime();
			res.status(200).send(uptime);
		} catch (e) {
			res.status(500).send(e.message);
		}
	},

	handleGetPlatform(req, res) {
		try {
			const System = new SystemModel();
			const platform = System.getPlatform();
			res.status(200).send(platform);
		} catch (e) {
			res.status(500).send(e.message);
		}
	},

	handleGetMemory(req, res) {
		try {
			const System = new SystemModel();
			const memory = System.getMemory();
			res.status(200).send(memory);
		} catch (e) {
			res.status(500).send(e.message);
		}
	},

	handleGetCpus(req, res) {
		try {
			const System = new SystemModel();
			const cpus = System.getCpus();
			res.status(200).send(cpus);
		} catch (e) {
			res.status(500).send(e.message);
		}
	},

	async handleGetProcesses(req, res) {
		try {
			const System = new SystemModel();
			const processes = await System.getProcesses();
			res.status(200).send(processes);
		} catch (e) {
			res.status(500).send(e.message)
		}
	},

	async handleGetDisks(req, res) {
		try {
			const System = new SystemModel();
			const disks = await System.getDisks();
			res.status(200).send(disks)
		} catch (e) {
			res.status(500).send(e.message)
		}
	}
};

module.exports = Systemcontroller;
