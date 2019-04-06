import { AbstractDisplay } from "./AbstractDisplay";

export class StringDisplay extends AbstractDisplay {
    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    public open(): void {
        throw new Error("Method not implemented.");
    }
    public print(): void {
        throw new Error("Method not implemented.");
    }
    public close(): void {
        throw new Error("Method not implemented.");
    }
}