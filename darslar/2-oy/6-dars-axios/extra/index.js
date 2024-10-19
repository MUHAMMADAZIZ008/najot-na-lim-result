import axios, {cencellationFn} from "./helpers/axios.js"
import express from "express"
const app = express()

app.use(express.json())
app.use(express.static("./public"))

app.get("/products", async(req, res) => {
    try{
        const res1 = await axios.get("/products", {
            signal: cencellationFn(100)
        })
        res.status(200).send({
            status: "ok",
            data : res1.data.products
    
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
})

app.get("/products/:id", async(req, res) => {
    try{
        let id = req.params.id
        const res1 = await axios.get(`/products/${id}`, {
            signal: cencellationFn(100)
        })
        res.status(200).send({
            status: "ok",
            data : res1.data
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
})

app.post("/products", async(req, res) => {
    try{
        let body = req.body
        if(!body.title || !body.price || !description){
            return res.status(400).send({
                status : "Maydonlarni to'liq kiriting"
            })
        }

        const res1 = await axios.post(`/products/add`, body,{
            signal: cencellationFn(100)
        })

        res.status(201).send({
            status: "ok",
            data : res1.data
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
})

app.put("/products", async(req, res) => {
    try{
        let body = req.body
        if(!body.title || !body.price || !description){
            return res.status(400).send({
                status : "Maydonlarni to'liq kiriting"
            })
        }

        const res1 = await axios.post(`/products/add`, body,{
            signal: cencellationFn(100)
        })

        res.status(201).send({
            status: "ok",
            data : res1.data
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
})



app.listen(5050, () =>{
    console.log("Dasturimz 5050-portda ishga tushdi");
})