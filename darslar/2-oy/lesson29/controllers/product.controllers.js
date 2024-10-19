import axios, { cancellationFn } from "../helpers/axios.js";
import path  from "path"
import fs from "fs"
import { all } from "axios";

let url = path.join(process.cwd(), "database", "product.json")

function createPaginate(data, page=1, limit=5) {
  let paginateData = data.slice((page - 1) * limit, limit * page)
  return paginateData || []
}


export const getAllData = async (req, res) => {
  try {
    let {limit, page} = req.query
    let allProduct = fs.readFileSync(url, "utf-8")
    let allData = JSON.parse(allProduct)


    res.status(200).send({
      data : createPaginate(allData, page, limit)
    })
  } catch (err) {
    res.status(500).send(err);
  }
};

export const searchData = async (req, res) => {
  try {
    let {q} = req.query
    let allProduct = fs.readFileSync(url, "utf-8")
    let allData = JSON.parse(allProduct)
    let searchedData = allData.filter(item => item.name.includes(q))
    if(searchedData.length === 0){
      return res.status(404).send({
        status : "Not Found"
      })
    }

    res.status(200).send({
      data : createPaginate(searchedData)
    })
  } catch (err) {
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
    let allProduct = fs.readFileSync(url, "utf-8")
    let allData = JSON.parse(allProduct)

    allData.push({
      id: allData.length + 1,
      ...req.body
    })

    fs.writeFileSync(url, JSON.stringify(allData), "utf-8")

    res.status(201).send({
      status: "Created",
    });

  } catch (err) {
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
