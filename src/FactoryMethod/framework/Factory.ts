import { Product } from './Product';

export abstract class Factory {
    create(owner: string): Product {
        return this.createP();
    }

    protected abstract createP(): Product;
}

