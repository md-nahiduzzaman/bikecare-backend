import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { customerService } from "./customer.service";
import sendResponse from "../../utils/sendResponse";

// create customer
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.createCustomer(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

// get all customers
const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.getAllCustomers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

// get single customer by id
const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await customerService.getSingleCustomer(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
};
