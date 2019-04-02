import { Banner } from "./Banner";
import { Print2 } from "../2/Print2"

export class PrintBanner extends Print2 {
    private banner: Banner;
    constructor(string: string) {
        super();
        this.banner = new Banner(string);
    }

    printWeak(): void {
        this.banner.showWithParen();
    }

    printStrong(): void {
        this.banner.showWithAster();
    }
}