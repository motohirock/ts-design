class BookShelf implements IAggregate {

    private list: Book[] = [];

    appendBook(book: Book) {
        this.list.push(book);
    }

    getBook(index: number) {
        return this.list[index];
    }

    getIterator() {
        return new BookShelfIterator();
    }
}