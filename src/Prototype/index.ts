import { Manager } from "./Manager";
import { UnderlinePen } from "./UnderlinePen";
import { MessageBox } from "./MessageBox";

var manager: Manager = new Manager();
var underlinePen: UnderlinePen = new UnderlinePen("~");
var messageBox: MessageBox = new MessageBox("*");
var messageBox2: MessageBox = new MessageBox("/");

manager.register("strong message", underlinePen);

var p1: IProduct = manager.create("strong message");

p1.use("aaaaaaaaaaaaaaaaaaaaaa");
