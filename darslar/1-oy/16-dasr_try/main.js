const books = ['JavaScript Mastery', 'Python for Beginners', 'Learning Go'];

// Kitobni yuklash funksiyasi
function downloadBook(book) {
    let isTrue = false
    for(item of books){
        if(book === isTrue){
            isTrue = true
        }
    }
    if(isTrue){
        console.log(`Yuklanmoqda ${book}`)
        let promis = new Promise(function(resolve, reject){
            setTimeout(()=>{
                console.log(`Yukalndi ${book}`)
            })
        })
    }else

}

// Barcha kitoblarni yuklab olish funksiyasi
async function downloadBooks(books) {
}

// Funksiyani chaqirish
downloadBooks(books);