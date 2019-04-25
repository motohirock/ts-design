import clone from 'clone';

export class MessageBox implements IProduct {
    private char: string;

    constructor(char: string) {
        this.char = char;
    }

    use(s: string): void {
        var length = s.length;
        console.log(Array(length + 3).join(this.char));
        console.log(this.char + s + this.char);
        console.log(Array(length + 3).join(this.char));
    }

    createClone(): IProduct {
        return <IProduct>clone(this);
    }
}