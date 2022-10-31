"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const users_routes_1 = require("../../../modules/user/infra/users.routes");
const express_1 = require("express");
exports.routes = (0, express_1.Router)();
exports.routes.use('/', users_routes_1.usersRouter);
