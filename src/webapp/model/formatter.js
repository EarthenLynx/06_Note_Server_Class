sap.ui.define([], function () {
	'use strict';
	return {
		formatBytesToGigabytes(bytes) {
			if (bytes) {
				return (bytes / 1000000000).toFixed(2);
			} else {
				return bytes;
			}
		},

		formatUsedBytesToPercent(disk) {
			if (disk) {
				return ((disk.used * 100) / disk.size).toFixed(2);
			} else {
				return '';
			}
		},

		formatPmemToPercent(pmem) {
			if (pmem) {
				return (pmem * 10).toFixed(2);
			} else {
				return pmem;
			}
		},
	};
});
