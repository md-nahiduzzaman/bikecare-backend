import prisma from "../../utils/prisma";
import { TBike } from "./bike.interface";

// create bikes
const createBike = async (payload: TBike) => {
  const result = await prisma.bike.create({ data: payload });
  return result;
};

// get all bikes
const getAllBikes = async () => {
  const result = await prisma.bike.findMany({});
  return result;
};

// get single bike by id
const getSingleBike = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: { bikeId: id },
  });
  return result;
};

export const bikeService = {
  createBike,
  getAllBikes,
  getSingleBike,
};
