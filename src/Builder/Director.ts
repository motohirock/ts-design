import { Builder } from "./Builder";

export class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public build(): void {
        this.builder.makeTitle("Greeting");
        this.builder.makeString("Morning");
        this.builder.makeItems(["Goodmorning", "Hello"]);

        this.builder.makeString("Night");
        this.builder.makeItems(["Goodnight", "Good bye"]);
        this.builder.close();
    }


}