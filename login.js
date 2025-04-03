// webixUI.js - This file defines the Webix UI

export function createLoginForm() {
    webix.ui({
        container: "loginContainer",
        view: "form",
        width: 400,
        elements: [
            { view: "text", label: "Username", name: "username" },
            { view: "text", type: "password", label: "Password", name: "password" },
            { 
                margin: 10, cols: [
                    { view: "button", value: "Login", css: "webix_primary", click: function() {
                        let values = this.getFormView().getValues();
                        webix.message("Username: " + values.username + "<br>Password: " + values.password);
                    }},
                    { view: "button", value: "Reset", click: function() {
                        this.getFormView().clear();
                    }}
                ]
            }
        ]
    });
}
