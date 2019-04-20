interface IProduct {
    use(s: string): void;
    createClone(): IProduct;
}