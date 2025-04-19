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

// update single customer by id
const updateSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await customerService.updateSingleCustomer(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

// delete single customer by id
const deleteSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await customerService.deleteSingleCustomer(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const customerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
