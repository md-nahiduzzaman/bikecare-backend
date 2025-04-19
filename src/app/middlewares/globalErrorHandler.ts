import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma";

// Custom error interface for type safety
export interface TCustomError extends Error {
  status?: number;
}

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = err.message || "Something went wrong!";
  let error = err;

  if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = httpStatus.BAD_REQUEST;
    success = false;
    message = "Validation Error";
    error = err.message;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = httpStatus.CONFLICT;
      message = "Duplicate Key error";
      error = err.meta;
    } else if (err.code === "P2025") {
      statusCode = httpStatus.NOT_FOUND;
      message = "Record not found";
      error = err.meta;
    }
  } else if (err instanceof Error) {
    // Handle custom errors with explicit status codes
    if (err.name === "NotFoundError") {
      statusCode = httpStatus.NOT_FOUND;
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

export default globalErrorHandler;
