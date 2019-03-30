class BookShelf implements IAggregate {

    private list: Book[] = [];

    length(): number {
        return this.list.length;
    }

    appendBook(book: Book) {
        this.list.push(book);
    }

    getBook(index: number) {
        return this.list[index];
    }

    getIterator() {
        return new BookShelfIterator(this);
    }
}