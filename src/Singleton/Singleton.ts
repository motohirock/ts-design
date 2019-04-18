export class Singleton {
    private static singleton: Singleton;
    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!this.singleton) {
            this.singleton = new Singleton();
            console.log('add Singleton Instance.')
        }
        return this.singleton;
    }
}