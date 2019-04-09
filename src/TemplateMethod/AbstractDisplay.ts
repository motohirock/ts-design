export abstract class AbstractDisplay {

    private loopCount: number = 5;

    constructor() {
    }

    public abstract open(): void;
    public abstract print(): void;
    public abstract close(): void;

    public display(): void {
        this.open();

        for (let index = 0; index < this.loopCount; index++) {
            this.print();
        }
        this.close();
    }

}