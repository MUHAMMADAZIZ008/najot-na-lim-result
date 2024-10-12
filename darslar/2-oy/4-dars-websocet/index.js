import http  from "http"
import fs  from "fs"
import path  from "path"



// const tasks = [
//     {
//         id: 1,
//         name : "birnima",
//         status : "complete",
//         date: "20.02.2024"
//     }
// ]


// fs.writeFile(url, JSON.stringify(tasks), (err) =>{
    //     if(err) throw err;
    // })
    
let url = path.join(process.cwd(), "data.json")
let app = http.createServer((req, res) =>{

    //get, post, put, delete, patch
    //path: /admin/15
    if(req.method === "GET" && req.url === "/tasks"){
        fs.readFile(url, "utf-8", (err, data) =>{
            if(err) throw err;

            res.writeHead(200, {"Content-Type": "application/json"})
            res.write()
            res.end();
        })
    }
    
})

app.listen(3001, () =>{
    console.log("Dastur 3001 ichi portda ishlamoqda!");
})