import { Book } from './Book';
import { BookShelf } from './BookShelf';

var bookShelf: BookShelf = new BookShelf;
bookShelf.appendBook(new Book("こころ"));
bookShelf.appendBook(new Book("人間失格"));
bookShelf.appendBook(new Book("君の名は"));
bookShelf.appendBook(new Book("ぐりとぐら"));

var it: IIterator<Book> = bookShelf.getIterator();

while (it.hasNext()) {
    var book: Book = it.next();
    console.log(book.getName());
}