import { AbstractDisplay } from "./AbstractDisplay";
import { CharDisplay } from "./CharDisplay";
import { StringDisplay } from "./StringDisplay";

var d1: AbstractDisplay = new CharDisplay("ttttttttt");

var d2: AbstractDisplay = new StringDisplay("tttttttttttttttt");

var d3: AbstractDisplay = new StringDisplay("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

d1.display();
d2.display();
d3.display();