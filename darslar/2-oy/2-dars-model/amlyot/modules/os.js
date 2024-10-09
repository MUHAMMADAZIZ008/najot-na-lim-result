import os from "os"

function osModuls(show) {
    if(show){
        console.log(os.arch());
        console.log(os.freemem() / 1024**2);
        console.log(os.cpus());
        console.log(os.hostname());
        console.log(os.homedir());
        console.log(os.uptime());
    }else{
        console.log("OS modulimiz ishlab turibdi!");
    }
}


export default osModuls