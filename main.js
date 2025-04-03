// main.js - This is the main script that runs the app

import { createLoginForm } from "./login.js";

// Ensure the Webix UI is initialized when the window loads
window.addEventListener("DOMContentLoaded", () => {
    createLoginForm();
});
