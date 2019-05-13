export class StringBuilder {
    private strings: Array<string> = [];

    public append(str: string): void {
        this.strings.push(str);
    }
    public toString(): string {
        return this.strings.join();
    }

}