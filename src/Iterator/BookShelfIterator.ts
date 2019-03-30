class BookShelfIterator implements IIterator {
    private bookShelf: BookShelf;
    private index: number = 0;

    constructor(bookShelf: BookShelf) {
        this.bookShelf = bookShelf;
    }

    hasNext(): boolean {
        return this.index < 3;
    }
    next(): Book {
        const book = this.bookShelf.getBook(this.index);
        this.index++;
        return book;
    }
}