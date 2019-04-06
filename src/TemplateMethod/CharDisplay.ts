import { AbstractDisplay } from "./AbstractDisplay";

export class CharDisplay extends AbstractDisplay {

    private string: string;
    constructor(string: string) {
        super();
        this.string = string;
    }

    public open(): void {
        throw new Error("Method not implemented.");
    } public print(): void {
        throw new Error("Method not implemented.");
    }
    public close(): void {
        throw new Error("Method not implemented.");
    }
}