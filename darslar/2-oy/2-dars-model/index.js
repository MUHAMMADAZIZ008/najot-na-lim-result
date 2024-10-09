const fs = require("fs")
const path = require("path")

fs.mkdir("math",{recursiv: true}, (err) =>{
    if(err){
        console.error(err);
    }
    console.log("sucsseful");
})

let pathDir = __dirname
console.log(pathDir);
let arr = ["app.js", "main.js", "fs.js"]
for(let name of arr){
    fs.writeFile(path.join(pathDir, "math", name), "", "utf8", (err) =>{console.log(err)})
}