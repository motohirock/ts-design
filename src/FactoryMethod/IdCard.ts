import { Product } from './framework/Product'

export class IdCard extends Product {
    public readonly owner: string;

    constructor(owner: string) {
        super();
        this.owner = owner;
        console.log(owner + 'さんのカードを作ります。');
    }
    public use(): void {
        console.log(this.owner + 'さんのカードを使います。');
    }
}