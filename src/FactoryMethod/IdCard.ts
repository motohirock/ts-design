import { Product } from './framework/Product'

export class IdCard extends Product {
    public readonly owner: string;

    constructor(owner: string) {
        super();
        this.owner = owner;
        console.log(owner + 'のカードを作ります。');
    }
    public use(): void {
        console.log(this.owner + 'のカードを使います。');
    }
}