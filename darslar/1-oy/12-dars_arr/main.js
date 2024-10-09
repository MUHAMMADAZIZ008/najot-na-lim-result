let transactions = []

let index = 0 
let isTrue = true
let info = "incom yoki expense"
while (isTrue) {
    let chouse = prompt(info)
    switch (chouse) {
        case "incom":
            let obj = {}
            let amout = prompt("enter amout")
            let category = prompt("enter category")
            transactions.push(
                obj[index] = {
                    "type" : "incom",
                    "amout" : obj.index["amout"] + amout,
                    "category" : category,
                    "date" : Date.now()
                }
            )
            index++
            break;
        case "expense":
            obj = {}
            amout = prompt("enter amout")
            category = prompt("enter category")
            transactions.push(
                obj[index] = {
                    "expense": "expense", 
                    "amout" : obj.index["amout"] - amout,
                    "category" : category,
                    "date" : Date.now()
                }
            )
        case "add":
            alert(transactions)
            break
        default:
            break;
    }
}