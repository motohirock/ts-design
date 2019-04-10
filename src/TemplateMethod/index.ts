import { AbstractDisplay } from "./AbstractDisplay";
import { CharDisplay } from "./CharDisplay";
import { StringDisplay } from "./StringDisplay";

var d1: AbstractDisplay = new CharDisplay("H");

var d2: AbstractDisplay = new StringDisplay("Hello");

var d3: AbstractDisplay = new StringDisplay("beroberobero")
d1.display();
d2.display();
d3.display();