let http = require("http")
let fs = require("fs")
let path = require("path")

let app = http.createServer((req, res) =>{
    //get, post, put, delete, patch
    //path: /admin/15
    if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end();
    }else if(req.method === "GET" && req.url === "/main"){
        let pathIn = path.join(process.cwd(), "extra", "index.html")
        
        fs.readFile(pathIn, "utf-8", (err, date) =>{
            res.writeHead(200, {"Content-Type": "text/html"})
            if(err){
                console.error(err);
                return
            }
            res.write(date)
            res.end()
        })


    }else if(req.method === "GET" && req.url === "/login"){
        let pathIn = path.join(process.cwd(), "extra", "login.html")
        
        fs.readFile(pathIn, "utf-8", (err, date) =>{
            res.writeHead(200, {"Content-Type": "text/html"})
            if(err){
                console.error(err);
                return
            }
            res.write(date)
            res.end()
        })
        
    }
    else if(req.method === "GET" && req.url === "/json"){
        let pathIn = path.join(process.cwd(), "extra", "user.json")
        
        fs.readFile(pathIn, "utf-8", (err, date) =>{
            res.writeHead(200, {"Content-Type": "application/json"})
            if(err){
                console.error(err);
                return
            }
            res.write(date)
            res.end()
        })
        
    }


    // let dateJson = {
    //     name: "Muhammdaziz",
    //     age: 16,
    //     gmail: "exmple"
    // }

    // let filePath = path.join(process.cwd(), "extra", "user.json")
    // fs.writeFile(filePath, JSON.stringify(dateJson),(err) =>{
    //     if (err) throw err
    // })
    
})

app.listen(3001, () =>{
    console.log("Dastur 3001 ichi portda ishlamoqda!");
})