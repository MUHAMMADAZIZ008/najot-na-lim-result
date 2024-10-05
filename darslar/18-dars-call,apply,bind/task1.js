
let abortController = new AbortController()
let signal = abortController.signal


setTimeout(() =>{
    abortController.abort()
}, 1000)

async function loadDate(){
    try{
        let date = await fetch("https://slowmo.me/5000", signal)
        if(!date.ok){
            throw new Error("err")
        }
        let jdate = await date.json()
        console.log(jdate)
    }catch(e){
        if(e.name === "AbortError"){
            console.log("fetch was aborte");
        }else{
            console.log(e);
        }
    }
}

loadDate()