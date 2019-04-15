import { Factory } from "./framework/Factory";
import { Product } from "./framework/Product";
import { IdCard } from "./IdCard";

export class IdCardFactory extends Factory {
    public readonly owners: Array<string> = [];

    protected createProduct(owner: string): Product {
        return new IdCard(owner);
    }
    protected registerProduct(product: Product): void {
        this.owners.push((<IdCard>product).owner)
    }
}