sap.ui.define(
	['sap/ui/model/json/JSONModel', 'sap/ui/Device'],
	function (JSONModel) {
		'use strict';

		const Memory = JSONModel.extend('sap.ui.demo.basicTemplate.model.Memory', {
			name: 'memory',
			rootPath: 'http://localhost:9001',
			servicePath: 'system/memory',

			async load(handler, query) {
				const url = `${this.rootPath}/${this.servicePath}${query ? query : ''}`;
				const options = { 'content-type': 'application/json' };
				const response = await fetch(url, options);
				const json = await response.json();
				this.setData(json);
				handler.getOwnerComponent().setModel(this, this.name);
			},
			async create() {
				console.log(this.getData());
			},
			async delete(id) {},
			async update(id) {},
		});

		return new Memory();
	}
);
