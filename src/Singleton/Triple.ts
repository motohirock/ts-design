export class Triple {
    private static inss: Array<Triple> = [
        new Triple(0),
        new Triple(1),
        new Triple(2)
    ];

    private id: number;
    private constructor(id: number) {
        this.id = id;
    }

    public static getInstance(id: number): Triple {
        return this.inss[id];
    }

    public toString(): string {
        return "id = " + this.id;
    }
}