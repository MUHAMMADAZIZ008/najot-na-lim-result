

export const getAllData = async(req, res) => {
    try{
        res.send("Books")
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
}

export const getDataById =  async(req, res) => {
    try{
        res.send("Books")
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
}

export const createData =  async(req, res) => {
    try{
        res.send("Books")
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
}

export const updateData = async(req, res) => {
    try{
        res.send("Books")
    }
    catch(e){
        console.log(e);
        res.status(500).send(err)
    }
}