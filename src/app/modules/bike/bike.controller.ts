import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bikeService } from "./bike.service";

// create bike
const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeService.createBike(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

// get all bikes
const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeService.getAllBikes();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

// get single bike by id
const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await bikeService.getSingleBike(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
};
