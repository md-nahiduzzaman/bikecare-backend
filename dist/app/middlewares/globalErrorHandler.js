"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../generated/prisma");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.status || http_status_1.default.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;
    if (err instanceof prisma_1.Prisma.PrismaClientValidationError) {
        statusCode = http_status_1.default.BAD_REQUEST;
        success = false;
        message = "Validation Error";
        error = err.message;
    }
    else if (err instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            statusCode = http_status_1.default.CONFLICT;
            message = "Duplicate Key error";
            error = err.meta;
        }
        else if (err.code === "P2025") {
            statusCode = http_status_1.default.NOT_FOUND;
            message = "Record not found";
            error = err.meta;
        }
    }
    else if (err instanceof Error) {
        // Handle custom errors with explicit status codes
        if (err.name === "NotFoundError") {
            statusCode = http_status_1.default.NOT_FOUND;
            message = err.message || "Resource not found";
        }
    }
    res.status(statusCode).json({
        success,
        statusCode: statusCode,
        message,
        error,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};
exports.default = globalErrorHandler;
