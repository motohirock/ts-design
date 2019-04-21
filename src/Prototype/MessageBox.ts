export class MessageBox implements IProduct {
    use(s: string): void {
        throw new Error("Method not implemented.");
    }
    createClone(): IProduct {
        throw new Error("Method not implemented.");
    }
}