import { Item } from "./Item";

/**
 * HTMLページを出力する抽象クラス
 */
export abstract class Page {

    protected title: string;
    protected author: string;
    protected content: Array<Item> = new Array;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public add(item: Item): void {
        this.content.push(item);
    }

    public output(): void {
        console.log("title:［" + this.title + "］");
        console.log("title:［" + this.author + "］");
        console.log(this.makeHTML());
    }

    public abstract makeHTML(): string;
}
