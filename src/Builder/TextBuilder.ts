import { Builder } from "./Builder";
import { StringBuilder } from "../common/StringBuilder"

export class TextBuilder extends Builder {

    private strBld: StringBuilder = new StringBuilder();

    public makeTitle(title: string): void {
        throw new Error("Method not implemented.");
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