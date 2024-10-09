import { error, log } from "console";
import path from "path"
import fs from "fs"

const user = {
    name : "men",
    age : 15,
    gmail : "men@gamil.com"
}

function fsModels(show) {
    // if(show){
    //     // console.log(Object.keys(fs));
    //     let fPath = path.join(process.cwd(), "modules", "db.json")
    //     fs.writeFile(fPath, JSON.stringify(user), (err)=>{
    //         if(err){
    //             console.log(err)
    //         }
    //         console.log("+++");
    //     })

    //     fs.readFile(fPath, "utf-8", function(err, date){
    //         if(err){
    //             console.log(err);
    //             throw err
    //         }
    //         let user = JSON.parse(date)
    //         console.log(user);

    //     })

    if(show){
        // console.log(Object.keys(fs));
        let fPath = path.join(process.cwd(), "modules", "db.json")
        fs.writeFile(fPath, JSON.stringify(user), (err)=>{
            if(err){
                console.log(err)
            }
            console.log("+++");
        })

        fs.rm(fPath, (err) =>{
            if(err){
                console.log(err);
            }
            console.log("o'chirildi");
        })
    }else{
        console.log("FS modulimiz ishlab turibdi!");
    }
}


export default fsModels