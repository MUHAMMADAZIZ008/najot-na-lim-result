let users = new Map()
let history = new Set()

const user1 = {
    name: 'Ali',
    cardNumber: '8600 1234 5678 9012',
    cardName: 'Humo',
    balance: 1000000,
    transferHistory:[
      {
        tranfer:"income",
        balance:1234,
        date:"Fri Sep 27 2024 11:56:38 GMT+0500 (Uzbekistan Standard Time)"
      }
    ]
};
const user2 = {
    name: 'Vali',
    cardNumber: '9860 1234 5678 2210',
    cardName: 'Humo',
    balance: 780000,
    transferHistory:[
      {
        tranfer:"income",
        balance:1234,
        date:"Fri Sep 27 2024 11:56:38 GMT+0500 (Uzbekistan Standard Time)"
      }
    ]
};

users.set(user1)
users.set(user2)


let isTrue = true

let command = `
    1 - add user \n
    2 - transfer \n
    3 - show hostory \n
    4 - exit
`

while (isTrue) {
    alert(command)
    let choiseCommand = prompt("choise caommand").toLowerCase()
    switch (choiseCommand) {
        case "add user":
            let user = {}
            let name = prompt("Enter a name")
            let cardNumber = prompt("Enter a card number")
            let cardName = prompt("Enter a card name")
            user["name"] = name
            user["cardNumber"] = cardNumber
            user["cardName"] =cardName
            user["transferHistory"] = {}
            break;
        case "transfer":
            let showAccaunt =   ``
            for(val of users){
                showAccaunt += `
                    name: ${val["name"]}\n
                       card number: ${val["cardNumber"]}\n
                        card name: ${val["cardName"]}\n 
                `
            }
            alert(showAccaunt)
            break;
        default:
            break;
    }
}
