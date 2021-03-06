sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("FPE_CreateContact.controller.CreateContact", {
		PEStepContainer: undefined,
		onInit: function() {
			if (sap.ushell && sap.ushell.services.ProcessEngine) {
				var lPE = sap.ushell.Container.getService("ProcessEngine");
				this.PEStepContainer = lPE.getCurrentStepContainer();
				if (this.PEStepContainer) {
					var lModel = new JSONModel({
						CustomerName: this.PEStepContainer.CustomerName,
						CustomerAddress: this.PEStepContainer.CustomerAddress,
						ContactText: this.PEStepContainer.ContactText
					});
					this.getView().setModel(lModel, "data");
				}
			}
		},
		onSubmit: function() {
			var lPE = sap.ushell.Container.getService("ProcessEngine");
			lPE.executeNext();
		}
	});

});