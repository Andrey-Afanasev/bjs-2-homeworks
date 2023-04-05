 
 class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = null){
        
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; 
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
        return  this.state
    }

    set  state (number) {
        lf (number < 0) {
            this._state = 0
        } else if (number > 100) {
            this._state = 100
        } else {
            this._state = number
        }
    }

    get stateNumber() {
        return  this._state
    }
    
 }

 

 class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }

 }

 class Book extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'book';
    }

}

class NovelBook extends Book {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'novel';
    }

}

class FantasticBook extends Book {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'fantastic';
    }

}

class DetectiveBook extends Book {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'detective';
    }

}

class Library {
    constructor(name) {
    this.name = name;
    this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            books.state.push(book)
        }
    }

    findBookBy(type, value){

        if (this.books.find(this.books => this.books[type] === value)) {
            return this.books.find(this.books => this.books[type] === value)

        } else {
            return null
        }
        
    }

    giveBookByName(bookName) {
        if (this.books.find(this.books => this.name === bookName)) {
            let deleteBook = this.books.IndexOf(this.books => this.name === bookName);
            this.books.slice(this.books.indexOf(deleteBook), 1)
        }else {
            return null
        }
    }
}



