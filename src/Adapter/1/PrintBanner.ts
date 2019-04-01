import { Banner } from "./Banner";

export class PrintBanner extends Banner implements Print {

    constructor(string: string) {
        super(string);
    }

    printWeak(): void {
        this.showWithParen();
    }

    printStrong(): void {
        this.showWithAster();
    }
}