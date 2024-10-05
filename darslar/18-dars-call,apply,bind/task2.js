let controller = new AbortController()

let obj ={
    date : [],
    async getDate(url){
        try{
            // this.cancelRequest(30)
            let res = await fetch(url, controller.signal)
            if(!res.ok){
                throw new Error("xato")
            }
            let a = await res.json()  
            this.date = a
        }catch(e){
            console.log(e);
        }
    },
    cancelRequest(ms){
        setTimeout(() =>{
            controller.abort()
        }, ms)
    }
}


// let url = "https://dummyjson.com/quotes"
let url = "https://jsonplaceholder.typicode.com/users"


const con = document.querySelector(".container")
async function showDate() {
    await this.getDate(url)
    for(let item of this.date){
        const str = `
            <div class="card">
                <h2>${item.name}</h2>
                <h2>${item.phone}</h2>
            </div>
        `
        con.innerHTML += str
    }
}

showDate.call(obj)
// obj.getDate(url)
