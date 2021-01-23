const fs = require('fs');
const {
	cpus,
	arch,
	release,
	platform,
	version,
	freemem,
	totalmem,
	userInfo,
	homedir,
	uptime,
} = require('os');

class SystemModel {
	constructor() {
		this.logoWindows =
			'https://upload.wikimedia.org/wikipedia/commons/4/48/Windows_logo_-_2012_%28dark_blue%29.svg';
		this.logoLinux =
			'https://commons.wikimedia.org/wiki/Linux#/media/File:Tux.svg';
		this.logoLinux = '';
		this.cpus = cpus();
		this.arch = arch();
		this.release = release();
		this.platform = platform();
		this.version = version();
		this.freemem = freemem();
		this.totalmem = totalmem();
		this.userInfo = userInfo();
		this.homedir = homedir();
		this.uptime = uptime();
	}
	/**
	 *
	 * @param {string} format Format of the uptime number. The following inputs are possible:
	 *                        mi->Minutes, d->Days, w->Weeks, mo->Months. Defaults to seconds.
	 */
	getUptime() {
		return {
			months: +(this.uptime / 60 / 60 / 24 / 7 / 4).toFixed(2),
			weeks: +(this.uptime / 60 / 60 / 24 / 7).toFixed(2),
			days: +(this.uptime / 60 / 60 / 24).toFixed(0),
			hours: +(this.uptime / 60 / 60).toFixed(0),
			minutes: +(this.uptime / 60).toFixed(0),
			seconds: +this.uptime,
		};
	}

	getPlatform() {
		return {
			logo: this._defineSystemLogo(),
			arch: this.arch,
			release: this.release,
			platform: this.platform,
			version: this.version,
		};
	}

	getUser() {
		return {
			userInfo: this.userInfo,
			homedir: this.homedir.replace(/\\/g, '/'),
		};
	}

	getMemory() {
		return {
			bytes: {
				freemem: this.freemem,
				totalmem: this.totalmem,
				usedmem: this.totalmem - this.freemem,
			},
			percent: {
				freemem: +((this.freemem * 100) / this.totalmem).toFixed(2),
				usedmem: +(100 - (this.freemem * 100) / this.totalmem).toFixed(2),
			},
		};
	}

	getCpus() {
		return this.cpus;
	}

	_defineSystemLogo() {
		switch (this.platform) {
			case 'win32':
				return this.logoWindows;
			case 'linux':
				return;
			default:
				return '';
		}
	}
}

module.exports = SystemModel;
