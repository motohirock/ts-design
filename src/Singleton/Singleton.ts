export class Singleton {
    private static singleton: Singleton = new Singleton();

    private constructor() {
        console.log('インスタンスを生成');
    }
    public static getInstance() {
        return this.singleton;
    }
}