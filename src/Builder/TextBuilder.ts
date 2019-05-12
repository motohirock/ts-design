import { Builder } from "./Builder";

export class TextBuilder extends Builder {

    private buffer: string;

    public makeTitle(title: string): void {
        this.buffer += "==============";
    }

    public makeString(str: string): void {
        throw new Error("Method not implemented.");
    }
    public makeItems(items: {}): void {
        throw new Error("Method not implemented.");
    }
    public close(): void {
        throw new Error("Method not implemented.");
    }
}