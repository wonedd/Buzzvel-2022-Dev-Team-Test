"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
/* eslint-disable prettier/prettier */
class AppError {
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
