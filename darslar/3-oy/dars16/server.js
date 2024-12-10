import express from "express"
import  DeviceDetector from 'node-device-detector'

const port = 3000
const detector = new DeviceDetector()

const app = express()
app.use(express.json())

app.use((req, res) =>{
    const ip = req.ip
    const ips = req.ips
    const host = req.host
    const hostname = req.hostname
    const xhr = req.xhr
    
    const userAgent = req.headers['user-agent']
    const result = detector.detect(userAgent)

    console.log({
        ...result, 
        ip,
        ips,
        host,
        hostname,
        xhr
    });
    res.send(result)
    
})


app.listen(port, () =>{
    console.log('app running');
    
})