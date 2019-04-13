import { Product } from './Product';
import { createPrivateKey } from 'crypto';

export abstract class Factory {
    create(owner: string): Product {
        return this.createP();
    }

    protected abstract createP(): Product;
}

