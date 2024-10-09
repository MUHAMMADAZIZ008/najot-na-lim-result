import { log } from "console";
import path from "path"

function pathModels(show) {
    if(show){
        let url_ = "D:/desctop/home/main.tex"
        console.log(path.basename(url_));
        console.log(path.dirname(url_));
        // console.log(process.cwd());
        console.log(path.parse(url_));
        console.log(path.format(path.parse(url_)));
        let n = path.join(process.cwd(), "modules", "path")
        console.log(n);
        console.log(path.relative("/home/main.js", "/home/app.js"));

    }else{
        console.log("OS modulimiz ishlab turibdi!");
    }
}


export default pathModels