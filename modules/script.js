//NOTE MODULES
//NOTE NAMED IMPORTS
import { pi, firstname as fname, product, evenNumber } from './utils.js';
//defaul imports
import demo1 from './utils.js'
console.log(demo1)
//Note pattern 2 for import named exports save all in one variable
import * as utils from './utils.js';
console.log(utils.evenNumber);
console.log(pi);
console.log(fname);
console.log(evenNumber);
console.log(product);

// const college = 'techno' ;
// console.log(college)
