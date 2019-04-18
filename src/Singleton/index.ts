console.log('start');
import { Singleton } from "./Singleton";

var singleton1: Singleton = Singleton.getInstance();
var singleton2: Singleton = Singleton.getInstance();

if (singleton1 === singleton2) {
    console.log('same instances');
} else {
    console.log('another instance');
}