import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { serviceRecordService } from "./serviceRecord.service";
import httpStatus from "http-status";

// create service record
const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceRecordService.createService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

// get all service record
const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceRecordService.getAllService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

// get single service record
const getSingleServices = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceRecordService.getSingleService(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

// update service record
const updateSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await serviceRecordService.updateSingleService(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

// check status of service record
const checkStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await serviceRecordService.checkStatus();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const serviceRecordController = {
  createService,
  getAllServices,
  getSingleServices,
  updateSingleCustomer,
  checkStatus,
};
