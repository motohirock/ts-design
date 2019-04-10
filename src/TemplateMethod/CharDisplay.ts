import { AbstractDisplay } from "./AbstractDisplay";

export class CharDisplay extends AbstractDisplay {

    private string: string;
    constructor(string: string) {
        super();
        this.string = string;
    }

    protected open(): void {
        process.stdout.write("<<");
    }
    protected print(): void {
        process.stdout.write(this.string);
    }
    protected close(): void {
        process.stdout.write(">>\n");
    }
}