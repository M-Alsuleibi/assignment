/* 
Breif Explanation on compiling `.ts` files:

1. Ensure TypeScript is installed globally or locally in the project by run:
   npm install -g typescript

2. Initialize Typescript in the project, by run :
    tsc --init
this will generate a `tsconfig.json` which is a configuration file used in 
TypeScript projects to specify compiler options and others settings.

3. Compile this TypeScript file into JavaScript using the TypeScript Compiler (tsc):
   tsc product.ts

this will generate a `product.js` file in the place i specify at 
`tsconfig.json` file -> here in the same directory.

4. Run the compiled JavaScript file using Node.js OR using browser console :
   node product.js
   
*/

// Task 4: Create an interface 
interface Product {
    name: string;
    price: number;
}

function totalPrice(products: Product[]) {
    return products.reduce((total, product) => total + product.price, 0);

}


// Tasek 5: Function accepts email addresses
function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}
