import { TCustomError } from "../../middlewares/globalErrorHandler";
import prisma from "../../utils/prisma";
import { TService } from "./serviceRecord.interface";

// create service record
const createService = async (payload: TService) => {
  const result = await prisma.serviceRecord.create({ data: payload });
  return result;
};

// get all service records
const getAllService = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

// get single service by id
const getSingleService = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });
  return result;
};

// update single service by id
const updateSingleService = async (id: string, payload: any) => {
  const result = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: payload,
  });
  return result;
};

// check status of service record
const checkStatus = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ["pending", "in_progress"],
      },
      serviceDate: {
        lte: sevenDaysAgo,
      },
    },
  });
  return result;
};

export const serviceRecordService = {
  createService,
  getAllService,
  getSingleService,
  updateSingleService,
  checkStatus,
};
