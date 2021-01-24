sap.ui.define([], function () {
	"use strict";
	return {
		formatBytesToGigabytes(bytes) {
			if(bytes) {
				return (bytes / 1000000000).toFixed(2)
			} else {
				return bytes;
			}
		}
	};
});