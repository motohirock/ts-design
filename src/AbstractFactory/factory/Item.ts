/**
 * Link, Trayを統一的に扱う抽象クラス
 */
export abstract class Item {
    protected caption: string;

    constructor(caption: string) {
        this.caption = caption;
    }
    public abstract makeHTML(): string;
}