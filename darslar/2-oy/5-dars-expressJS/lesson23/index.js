import http from "http";
import fs from "fs";
import path from "path";


const tasks= [
{
  id:1,
  name : "Learn EJS",
  status : "completed",
  date : "22.05.2025"
},
]


let url = path.join(process.cwd(), "public", "user.json");
// fs.writeFile(url, JSON.stringify(tasks), (err)=>{
//   if(err) throw err;
// });

const app = http.createServer((req, res) => {
  
  if (req.method === "GET" && req.url === "/tasks") {
    fs.readFile(url, "utf-8", (err, data)=>{
      if(err) throw err
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    })
  }
  else if (req.method === "POST" && req.url === "/tasks") {
    let body = '';
    req.on('data', (chunk)=>{
      body += chunk.toString()
    });

    req.on('end', ()=>{
      let obj = JSON.parse(body);
      console.log(obj);
      fs.readFile(url, "utf-8", (err, data)=>{
        if(err) throw err
        let ob = JSON.parse(data)
        ob.push(obj)
  
        fs.writeFile(url, JSON.stringify(ob), (err)=>{
          if(err) throw err
          console.log("Yozildi...");
        })
      })
    })
    res.end("Succes");
  }
});

app.listen(5000, () => {
  console.log("Dastur 5000-portda ishga tushdi");
});
