import { AbstractDisplay } from "./AbstractDisplay";
import { CharDisplay } from "./CharDisplay";
import { StringDisplay } from "./StringDisplay";

var d1: AbstractDisplay = new CharDisplay("H");

var d2: AbstractDisplay = new StringDisplay("Hello");

d1.display();