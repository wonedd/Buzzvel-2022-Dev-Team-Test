"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running on port 3333');
});
