import { Builder } from "./Builder";
export class TextBuilder extends Builder {
    public makeTitle(title: string): void {
        throw new Error("Method not implemented.");
    } public makeString(str: string): void {
        throw new Error("Method not implemented.");
    }
    public makeItems(items: {}): void {
        throw new Error("Method not implemented.");
    }
    public close(): void {
        throw new Error("Method not implemented.");
    }
}