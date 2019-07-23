sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.cerner.interns.SAPUI5_Demo.controller.View1", {
		onInit: function () {
			var oModel = new JSONModel();
			oModel.loadData("./api/data.json");
			debugger;
			this.getView().setModel(oModel, "patients");
		},
		onClick: function (oEvent) {
			debugger;
		},
		onAddPatient: function (oEvent) {
			//TODO: Old fashion way 

			// Citim fiecare field , il punem intr-un obiect /variabile 
			// Refactoring cu studentii 
			debugger;
			var name = this.getView().byId("idInputName").getProperty("value");
			var age = this.getView().byId("idInputAge").getProperty("value");

			var newPatient = {
				name: name,
				age: age
			};
			var data = this.getView().getModel("patients").getData().Patients;
			data.push(newPatient);
			this.getView().getModel("patients").updateBindings()
			debugger;



			//TODO:  With bindings


		}
	});
});