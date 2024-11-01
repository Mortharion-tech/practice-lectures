// importing the function from another module/file
// possible to import as an alias (same function, different name for this file)
// can import multiple things from the same file seperated by comma
import { getFormattedDate as formatDate, defaultDateFormat} from "./date.js";

console.log(formatDate('01-15-2004'));
console.log(defaultDateFormat);

// can import all functions & variables from a file with '*' (stored as an object)
// anything added to this file later on will also be imported
import * as fun from './fun.js';
console.log(fun);
fun.fun1();
fun.fun2();
fun.fun3();