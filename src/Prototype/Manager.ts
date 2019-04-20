export class Manager {
    private showcase: { [name: string]: IProduct } = {}

    public register(name: string, proto: IProduct): void {
        this.showcase[name] = proto;
    }

    public create(productName: string): IProduct {
        return this.showcase[productName].createClone();
    }
}