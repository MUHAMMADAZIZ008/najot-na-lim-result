const oila = {
    ota : {
        ism: "Dilmurodjon",
        kasb : "tadbirkor",
        yosh : 50,
        jins: "Male"
    },

    ona : {
        ism: "Dilshodaxon",
        kasb : "hamshira",
        yosh : 44,
        jins: "Famale"
    },

    qiz : {
        ism: "Dildora",
        kasb : "student",
        yosh : 18,
        jins: "Famale"
    },

    ogli : {
        ism: "Muhammadaziz",
        kasb : "student",
        yosh :  16,
        jins: "Male"
    },

    getYosh(n) {
        let arr = []
        for (keys in this){
            if(this[keys]["yosh"] > n){
                arr.push(this[keys])
            }
        }
        return arr
    },
    getMale(){
        let male = 0
        for (keys in this){
            if(this[keys]["jins"] === "Male"){
                male += 1
            }
        }
        return male
    },
    getFamale(){
        let famale = 0
        for (keys in this){
            if(this[keys]["jins"] === "Famale"){
                famale += 1
            }
        }
        return famale
    }
}
console.log(oila.getYosh(30))
console.log(oila.getFamale())