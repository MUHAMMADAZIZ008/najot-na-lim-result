import axios, { cancellationFn } from "../helpers/axios.js";

export const getAllData = async (req, res) => {
  try {
    res.status(200).send({
      status: "OK",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getDataById = async (req, res) => {
  try {
    res.status(200).send({
      status: "OK",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const createNewData = async (req, res) => {
  try {
    res.status(201).send({
      status: "Created",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const updateData = async (req, res) => {
  try {
    res.status(200).send({
      status: "Updated",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const deleteData = async (req, res) => {
  try {
    res.status(200).send({
      status: "Deleted",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
