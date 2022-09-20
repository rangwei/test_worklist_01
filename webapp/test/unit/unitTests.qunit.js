/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test/demo/worklist/test_worklist_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});