"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable func-names */
const app_1 = require("./app");
app_1.app.listen(process.env.PORT || 3333, function () {
    console.log('Express server listening on port %d in %s mode', this.address().port, app_1.app.settings.env);
});
