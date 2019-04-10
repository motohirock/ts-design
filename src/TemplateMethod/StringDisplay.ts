import { AbstractDisplay } from "./AbstractDisplay";

export class StringDisplay extends AbstractDisplay {
    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    protected open(): void {
        this.printLine()
    }
    protected print(): void {
        process.stdout.write("|" + this.string + "|\n");
    }
    protected close(): void {
        this.printLine()
    }

    private printLine() {
        process.stdout.write("+");
        for (let index = 0; index < this.width; index++) {
            process.stdout.write("-");
        }
        process.stdout.write("+\n");
    }
}