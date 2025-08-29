


const myLibrary = [];

function Book (title, author, pages, read) {
    
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.UUID = crypto.randomUUID();
    this.info = function (){
        console.log(`${title} by ${author}, ${pages} pages, ${read?"read":"not read yet"}, ${UUID}`)
    }
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    console.log(book.UUID);
    myLibrary.push(book);
    myLibrary.sort((a,b)=> a.pages>b.pages?1:-1 )
}

addBookToLibrary("Lord of the Rings: The Two Towers", "J.R.R. Tolkien", "352 p.", "read")
addBookToLibrary("Lord of the Rings: The Fellowship Of The Ring", "J.R.R. Tolkien", "423 p.", "read")
addBookToLibrary("Lord Of The Rings: The Return of The King", "J.R.R Tolkien", "416 p.", "read")
addBookToLibrary("The Hobbit, or To There and Back", "J.R.R. Tolkien","310 p.", "read")

function displayBooks () {
    const container = document.getElementById("bookDisplay")
    for (let i=0; i<myLibrary.length; i++){
        const content = document.createElement("div");
        let book = myLibrary[i];
        content.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read?"read":"not read yet"}, ${book.UUID}`;
        let buttonRemove = document.createElement("button");
        buttonRemove.style.width = "100px"
        buttonRemove.style.height = "20px"
        buttonRemove.textContent = "Remove book"
        function onRemove() {
            console.log("removing from library");
        }
        buttonRemove.addEventListener("click", onRemove, false)

        let buttonRead = document.createElement("button");
        buttonRead.style.width = "100px"
        buttonRead.style.height = "20px"
        buttonRead.textContent = "Mark as read"

        content.appendChild(buttonRemove)
        content.appendChild(buttonRead)
        container.appendChild(content);
    }
}

displayBooks();
console.table(myLibrary)