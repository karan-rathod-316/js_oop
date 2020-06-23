## An object-oriented book-list!

*[ ] Create a class BookList
*[ ] Create another class called Book

BookLists should have the following properties:
  1. Number of books marked as read
  2. Number of books marked not read yet
  3. A reference to the next book to read (book object)
  4. A reference to the current book being read (book object)
  5. A reference to the last book read (book object)
  6. An array of all the Books

Each Book should have several properties:
  1. Title
  2. Genre
  3. Author
  4. Read (true or false)
  5. Read date, can be blank, otherwise needs to be a JS Date() object


Every Booklist should have a few methods:
-add(book)
  * [ ] should add a book to the books list.

-finishCurrentBook()
  * [ ] should mark the book that is currently being read as "read"
  * [ ] Give it a read date of new Date(Date.now())
  * [ ] Change the last book read to be the book that just got finished
  * [ ] Change the current book to be the next book to be read
  * [ ] Change the next book to be read property to be the first unread book you find in the list of books


<!-- JS Code -->
<!-- Class BookList -->
  class BookList{
    constructor(read,notRead,nextBook,currentBook,lastBook){
        this.read = read;
        this.notRead = notRead;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.allBooks = [];
    }
    add(book){
        this.allBooks.push(book);
    }
    finishCurrentBook(){
        this.currentBook.isRead = true;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = //Confused with what to put here;
    }
}
<!-- Class Book -->
class Book{
    constructor(title,genre,author,isRead,readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        this.readDate = readDate;
    }

}