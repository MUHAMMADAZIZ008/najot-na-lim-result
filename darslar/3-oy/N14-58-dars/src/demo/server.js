import express from "express"

import fs from "fs/promises"
import path from "path"

const app = express()

app.use("/request", async(req, res) =>{
    const file = await fs.readFile(path.join(import.meta.dirname, "Algoritmlash.pdf"))
    res.send(file)
})

app.listen(4000, () =>{
    // eslint-disable-next-line no-console
    console.log(`server running`);
})