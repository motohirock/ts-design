import { Singleton } from "./Singleton";

console.log('start');

var singleton1: Singleton = Singleton.getInstance();
var singleton2: Singleton = Singleton.getInstance();

if (singleton1 === singleton2) {
    console.log('same instances');
} else {
    console.log('another instance');
}