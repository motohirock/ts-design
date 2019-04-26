import { Manager } from "./Manager";
import { UnderlinePen } from "./UnderlinePen";
import { MessageBox } from "./MessageBox";

var manager: Manager = new Manager();
var underlinePen: UnderlinePen = new UnderlinePen("~");
var messageBox: MessageBox = new MessageBox("*");
var messageBox2: MessageBox = new MessageBox("/");

manager.register("strong message", underlinePen);
manager.register("asterisk box", messageBox);
manager.register("slash box", messageBox2);

var p1: IProduct = manager.create("strong message");
var p2: IProduct = manager.create("asterisk box");
var p3: IProduct = manager.create("slash box")

p1.use("hello world");
p2.use("hello world");
p3.use("Hello World");
