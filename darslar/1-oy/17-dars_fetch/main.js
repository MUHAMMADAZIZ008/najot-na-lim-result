/*const getDate = async (URL) => {
    try{
        const res = await fetch(URL)
        if(!res.ok){
            throw new Error("ERROR URL")
        }
        const date = await res.json()
    	for(item in date){
    		consol.log(item)
    	}
        console.log(date);
    }catch(e){
        console.log(e);
    }
}

getDate("https://nbu.uz/en/exchange-rates/json")
*/

// const getDate = async (URL, URL2) =>{
//     try{
//         const res = await fetch(URL)
//         const res2 = await fetch(URL2)
//         if(!res.ok){
//             throw new Error("1- url hato")
//         }
//         if(!res2.ok){
//             throw new Error("2- url hato")
//         }

//         const date = await res.json()
//         const date2 = await res2.json()

//         let idInfo = ""
//         // console.log(date);
//         // console.log(date2);
//         for(user of date){
//             if(user["userId"] === date2["id"]){
//                 idInfo += `Name: ${date2["name"]}\ncity: ${date2["address"].city}\n
//                         comany: ${date2["company"]}
//                 `
//             }
//         }
//         console.log(idInfo)
//     }catch(e){
//         console.log(e);
//     }
// }

// console.log(getDate("https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/users/1"))


let userName = ['xam1dullo','takeda05','MUHAMMADAZIZ008','draco-code','Abdulaziz_c5','Dasturlash-Ali','Abdurakhim254','Javohir11011','temurparaxatov','Xorazm92','FirdavsNurmatov','SSR707','SobitjonZamonov','Jahongir676','Akmalkhon0019','abdulaz1z31','muhiddinovismoil','BekzodQodirovdev']



let getInfo = async (URL) => {
    try{
        let res = await fetch(URL)
        if(!res.ok){
            throw new Error("URL xato")
        }
        let date = await res.json()
        console.log(date);
        return await date
    }catch(e){
        return e
    }
}

function showInfo(allUser, userName) {
    let infoUser = []
    console.log(allUser);
    for(users of userName){
        for(user of allUser){
            if(users === user.login){
                infoUser.push(user)
            }
        }
    }
    return infoUser
}


getInfo("https://api.github.com/users")
    .then(res => console.log(showInfo(res)))
    .catch("xato")

// console.log(allUser);