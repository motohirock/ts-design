import clone from 'clone';

export class MessageBox implements IProduct {
    private char: string;

    use(s: string): void {
        console.log("\"" + s + "\"");
        console.log(Array(s.length + 3).join(this.char));
    }

    createClone(): IProduct {
        return <IProduct>clone(this);
    }
}