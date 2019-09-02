console.log("index.js");
import demo1 from "./demo-1";
import * as demo2 from "./demo-2";
import { obj, c } from "./demo-2";
console.log(demo1);
console.log(demo1.c(demo1.a, demo1.b));
console.log(demo2);
console.log(demo2.c(demo2.obj.a, demo2.obj.b));

console.log(obj);
console.log(c);

console.log(c(obj.a, obj.b));
