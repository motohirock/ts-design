import clone from 'clone';

export class UnderlinePen implements IProduct {
    private char: string;

    constructor(char: string) {
        this.char = char;
    }

    use(s: string): void {
        console.log("\"" + s + "\"");
        console.log(Array(s.length + 3).join(this.char));
    }
    createClone(): IProduct {
        return <IProduct>clone(this);
    }
}