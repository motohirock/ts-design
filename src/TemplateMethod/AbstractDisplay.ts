export abstract class AbstractDisplay {

    private loopCount: number = 5;

    constructor() {
    }

    protected abstract open(): void;
    protected abstract print(): void;
    protected abstract close(): void;

    public display(): void {
        this.open();

        for (let index = 0; index < this.loopCount; index++) {
            this.print();
        }
        this.close();
    }

}