sap.ui.define(
	[
		'sap/ui/core/UIComponent',
		'sap/ui/Device',
		'sap/ui/demo/basicTemplate/model/Memory.model',
	],
	function (UIComponent, Device, Memory) {
		'use strict';

		return UIComponent.extend('sap.ui.demo.basicTemplate.Component', {
			metadata: {
				manifest: 'json',
			},

			/**
			 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
			 * @public
			 * @override
			 */
			init: function () {
				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				// Initialize the models
				// this.setModel({}, Memory.name);

				// create the views based on the url/hash
				this.getRouter().initialize();
			},
		});
	}
);
