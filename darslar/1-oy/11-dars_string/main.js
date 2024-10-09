let toDo = {}

let i = 1
let isTrue = true
let outPut = []
let commend = ["add: Yangi vazifa qo'shish ", "\n", "list: Barcha vazifalarni ko'rsatish ", "\n", "delete: Vazifani o'chirish ","\n", "exit: Dasturdan chiqish"]
while (isTrue) {
    alert(commend)
    let input = prompt("Enter a command").toLocaleLowerCase()
    switch (input) {
        case "add":
            let addList = prompt("Enter todo")
            toDo[i] = addList + "\n"
            i++
            break;
        case "delete":
            alert(outPut)
            let deletToDo = prompt("Delete todo")
            for (key in toDo){
                if(deletToDo === key){
                    delete toDo[`${key}`]
                }
            }
            break
        case "list":
            for (key in toDo){
                outPut.push(`${key} - ${toDo[key]}`)
            }
            alert(outPut)
            break
        case "exit":
            isTrue = false
            alert("exited the program")
        default:
            alert("there is no such command")
            break;
    }

}
