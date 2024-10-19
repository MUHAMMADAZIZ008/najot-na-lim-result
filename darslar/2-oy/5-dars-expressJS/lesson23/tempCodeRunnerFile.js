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
fs.writeFile(url, JSON.stringify(tasks), (err)=>{
  if(err) throw err;
});
