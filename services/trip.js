import Trip from "../models/trip.js";
import { NotFoundError } from "../errors/not-found.js";

export const create = async (data, userId) => {
  const trip = await Trip.create({ ...data, user: userId });
  return trip;
};

export const getAll = async (userId) => {
  const trips = await Trip.find({ user: userId });
  return trips;
};

export const getOne = async (id, userId) => {
  const trip = await Trip.findOne({
    _id: id,
    user: userId,
  })
  if (!trip) throw new NotFoundError("Trip not found");
  return trip;
};

export const update = async (id, tripData, userId) => {
  const trip = await Trip.findOneAndUpdate(
    { _id: id, user: userId },
    tripData,
    { returnDocument: 'after' }
  );
  if (!trip) throw new NotFoundError("Trip not found");
  return trip;
};

export const destroy = async (id, userId) => {
  const trip = await Trip.findOneAndDelete({ _id: id, user: userId });
  if (!trip)throw new NotFoundError("Trip not found");
  return trip;
};
