sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("FPE_CreateContact.controller.CreateContact", {
		onSubmit: function() {
		    var lPE = sap.ushell.Container.getService("ProcessEngine");
		    lPE.executeNext();
		}
	});

});