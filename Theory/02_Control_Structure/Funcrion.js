// normal function 
function sayhello(str){
    return console.log(str);
}
sayhello("abc")
console.log("============");

// aerrow functions 
const hello = () =>{
    console.log("hello");
}
hello();
console.log("============");

// function inside function
function one(){
    let a = "one"
    function two(){
        let b = "two"
        console.log(a);
        console.log(b);
    }
    // not access bcz functional scop 
    // console.log(b);
    two()
}
one()
console.log("============");


// retun function
const add = (a,b) =>{
    return a *b
}
console.log(add(5,10));
console.log("============");





