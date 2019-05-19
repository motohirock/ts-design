import { Item } from "./Item";
/**
 * LinkやTrayを扱う抽象クラス
 */
export abstract class Tray extends Item {
    protected tray: Array<Item> = new Array;
    constructor(caption: string) {
        super(caption);
    }
    public add(item: Item) {
        this.tray.push(item);
    }
}