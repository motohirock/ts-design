import { Book } from './Book';
import { BookShelf } from './BookShelf';
import { BookShelfIterator } from './BookShelfIterator'

var bookShelf: BookShelf = new BookShelf;
bookShelf.appendBook(new Book("こころ"));
bookShelf.appendBook(new Book("人間失格"));
bookShelf.appendBook(new Book("君の名は"));
bookShelf.appendBook(new Book("ぐりとぐら"));

var it: BookShelfIterator = bookShelf.getIterator();

while (it.hasNext()) {
    console.log(it.next());
}