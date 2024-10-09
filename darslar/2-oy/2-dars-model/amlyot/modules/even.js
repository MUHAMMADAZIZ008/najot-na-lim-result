import EventEmitter from "events";


function evenModuls(show) {
    if(show){
        class Events extends EventEmitter{}
        const ev = new Events()
        ev.on("login", (name) =>{
            console.log(`${name} login qildi`);
        } )
        ev.emit("login", process.stdin())

    }else{
        console.log("FS modulimiz ishlab turibdi!");
    }
}


export default evenModuls