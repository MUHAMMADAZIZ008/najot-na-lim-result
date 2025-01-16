import { config } from 'dotenv'
import express from 'express'


config()
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Success</h1>')
})

const port = process.env.PORT

app.listen(1234, () => {
    console.log(`server is runnig on port ${port}`);

})