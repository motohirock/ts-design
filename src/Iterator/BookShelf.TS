import { Book } from './Book';
import { BookShelfIterator } from './BookShelfIterator'

export class BookShelf implements IAggregate {

    private books: Book[] = [];

    get length(): number {
        return this.books.length;
    }

    appendBook(book: Book) {
        this.books.push(book);
    }

    getBook(index: number) {
        return this.books[index];
    }

    getIterator() {
        return new BookShelfIterator(this);
    }
}