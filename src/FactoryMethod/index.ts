import { Factory } from "./framework/Factory";
import { IdCardFactory } from "./IdCardFactory";
import { Product } from "./framework/Product";

var factory: Factory = new IdCardFactory();

var idCard1: Product = factory.create('one');
var idCard2: Product = factory.create('two');
var idCard3: Product = factory.create('three');

idCard1.use();
idCard2.use();
idCard3.use();