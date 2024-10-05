class Library {
    constructor(name, books = []) {
        this.name = name
        this.books = books
    }

    addBook(book) {
        this.books.push(book)
    }

    removeBook(book) {
        let idx = this.books.indexOf(book)
        this.books.splice(idx, 1)
    }

    findBooksByAuthor(author) {
        let res = []
        for (let book of this.books) {
            if(book.author.includes(author)) {
                res.push(book)
            }
        }
        return res
    }

    displayBooks() {
        let show = ''
        for (let book of this.books) {
            show += book.getInfo + '\n'
        }

        console.log(show)
    }
}

class Book {
    constructor(title,author,isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
    get getInfo(){
        return `Title: ${this.title}, Authorn: ${this.author}, ISBN: ${this.isbn}`
    }
}


class FictionBook extends Book{

    constructor(title, author, isbn, genre){
        super(title, author, isbn)
        this.genre = genre
    }

    get getInfo(){
        return `
            title: ${this.title}\n
            auther: ${this.author}\n
            isbn: ${this.isbn}\n
            genre: ${this.genre}
        `
    }
}
class NonFictionBook extends Book{
    constructor(title, auther, isbn, genre, subject){
        super(title, auther, isbn,genre)
        this.subject = subject
    }
    getInfo(){
        console.log(`
            title: ${this.title}\n
            auther: ${this.auther}\n
            isbn: ${this.isbn}\n
            genre: ${this.genre}\n
            subject: ${this.subject}
        `)
    }
}

const book = new Book("Garry Poter 1","J.K.ROWLING",false)
const book2 = new Book("Garry Poter 2","J.K.ROWLING",false)
const book3 = new Book("Garry Poter 3","J.K.ROWLING",false)
const book4 = new Book("Garry Poter 4","J.K.ROWLING",false)
const book5 = new Book("Sariq","GE",false)
const book6 = new FictionBook('Berserk', 'MuhammadAziz', false, 'drama, love')

const mylib = new Library('MyLib')

mylib.addBook(book)
mylib.addBook(book2)
mylib.addBook(book3)
mylib.addBook(book4)
mylib.addBook(book5)
mylib.addBook(book6)

mylib.displayBooks()

// console.log(mylib.findBooksByAuthor('G'))
mylib.removeBook(book2)
mylib.displayBooks()
