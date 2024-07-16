// scope examples 
console.log('Scop example =>');
var a = "hello";
function scop(){
    var x = "loacal use inside function"
    let b = "good morning"
    console.log(a);
    console.log(b +" block");
    function second(){
        console.log(`this is second function in side  main`);
        console.log(b + " functional scop");
        console.log(x);
    }
    second()
}
// not access because block scop
// console.log(b);
// console.log(x);

scop()
console.log(a + " global");
console.log("================");

// hoisting
aa = 5 
console.log(aa + " Example of hoisting");
var aa;