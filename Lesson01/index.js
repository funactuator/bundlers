import { displayNumber } from "./numbers.js";
// If i just use "./numbers" it gives error, it only works if .js is added.
//Above is only valid when i have started live server

/**
 * Learnings
 * 1. If we dont use type = module, import export wont work
 * 2. If we add type = module in script tag and just open the index.html by double clicking it,
 * It wont work, will throw cors error
 * 3. This is due to non using of http protocol, Not clear around this one
 */

let arr = [1,2,3,4,5,7,9];
arr.forEach(element => {
    displayNumber(element)
});