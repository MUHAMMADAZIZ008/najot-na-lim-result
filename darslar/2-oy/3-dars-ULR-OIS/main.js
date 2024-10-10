const http = require("node:hhtp")

const server = http.createServer((request, response) =>{
    console.log(request.method);
    let body = " "
    request.on("data", (chunk) =>{
        // console.log(chunk);
        body += chunk.toString()
    })
    request.on("end", ()=>{
        console.log(body);
    })
    response.writeHead(200, {"Contact-Type" : "text/html"})
    response.write("<html><h1>Hello</h1></html>")
    response.end()
})

server.listen(3000, () =>{
    console.log("Server running on port 300");
})