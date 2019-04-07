import { AbstractDisplay } from "./AbstractDisplay";

export class CharDisplay extends AbstractDisplay {

    private string: string;
    constructor(string: string) {
        super();
        this.string = string;
    }

    public open(): void {
        console.log("<<");
    } public print(): void {
        console.log(this.string);
    }
    public close(): void {
        console.log(">>");
    }
}