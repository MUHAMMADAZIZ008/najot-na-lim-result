import { Market } from "../models/index.js";

export const createMarketCon = async (req, res, next) => {
  try {
    const category = new Market(req.body);

    await category.save();

    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const updateMarketCon = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await Market.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      lean: true,
    });

    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const getAllMarketCon = async (req, res, next) => {
  try {
    const category = await Market.find();
    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const getByIdMarketCon = async (req, res, next) => {
  try {
    const category = await Market.findById(req.params.id);
    res.send(category);
  } catch (error) {
    next(error);
  }
};

export const removeByIdMarketCon = async (req, res, next) => {
  try {
    const category = await Market.findByIdAndDelete(req.params.id);
    res.send(category);
  } catch (error) {
    next(error);
  }
};
