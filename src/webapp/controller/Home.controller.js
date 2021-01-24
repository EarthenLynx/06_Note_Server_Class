sap.ui.define(
	[
		'sap/ui/core/mvc/Controller',
		'sap/m/MessageToast',
		'sap/ui/demo/basicTemplate/model/Memory.model',
		'sap/ui/demo/basicTemplate/model/Platform.model',
		'sap/ui/demo/basicTemplate/model/Uptime.model',
		'sap/ui/demo/basicTemplate/model/Cpus.model',
		'sap/ui/demo/basicTemplate/model/Disks.model',
		'sap/ui/demo/basicTemplate/model/Processes.model',
		'../model/formatter',
	],
	function (
		Controller,
		Toast,
		Memory,
		Platform,
		Uptime,
		Cpus,
		Disks,
		Processes,
		formatter
	) {
		'use strict';

		return Controller.extend('sap.ui.demo.basicTemplate.controller.App', {
			formatter: formatter,

			onInit: function () {
				setInterval(() => {
					Memory.load(this);
					Uptime.load(this);
				}, 10000);
				this.handleLoadServerData();
			},

			handleLoadServerData() {
				Promise.all([
					Memory.load(this),
					Platform.load(this),
					Uptime.load(this),
					Cpus.load(this),
					Disks.load(this),
					Processes.load(this),
				])
					.then(() => {
						this.byId('serverStatusTag').setStatus('Success');
						Toast.show('Finished loading server data');
					})
					.catch(e => {
						this.byId('serverStatusTag').setStatus('Error');
						Toast.show('Could not load server data: ' + e);
					});
			},

			handleReloadProcessData() {
				Processes.load(this);
				Toast.show('Reloaded processes data')
			},
		});
	}
);
