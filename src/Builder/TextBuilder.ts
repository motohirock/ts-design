import { Builder } from "./Builder";
import { StringBuilder } from "../common/StringBuilder"

export class TextBuilder extends Builder {

    private strBld: StringBuilder = new StringBuilder();

    public makeTitle(title: string): void {
        this.strBld.append("======================\n");
        this.strBld.append("[" + title + "]\n");
        this.strBld.append("\n");
    }

    public makeString(str: string): void {
        this.strBld.append("■" + str + "\n");
        this.strBld.append("\n");
    }

    public makeItems(items: {}): void {
        throw new Error("Method not implemented.");
    }
    public close(): void {
        this.strBld.append("======================\n");
    }
}