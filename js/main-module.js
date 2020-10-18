import { sum, multiply } from "./modules/export-example";
import * as exportedFunctions from "./modules/export-example";
import userConstants from "./modules/export-constants";



console.log(sum(1,4))
console.log(divide(1,4))

console.log(exportedFunctions.multiply(1,6))

console.log(userConstants.apiKey);