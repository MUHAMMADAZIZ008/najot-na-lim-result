import axios, {cencellationFn} from "../helpers/axios.js"


export const getAllData = async(req, res) => {
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
}

export const getDataById =  async(req, res) => {
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
}

export const createData =  async(req, res) => {
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
}

export const updateData = async(req, res) => {
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
}