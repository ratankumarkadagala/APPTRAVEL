sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("empform.controller.View1", {
        onInit() {
            const oModel = new JSONModel({
                employee: {
                    name: "Ratnakumar",
                    email: "ratnakumar@gmail.com",
                    phone: "9388338383",
                    department: "IT",
                    enabled: false               }
            });
            this.getView().setModel(oModel, 'empModel');

            
        }
    });
});