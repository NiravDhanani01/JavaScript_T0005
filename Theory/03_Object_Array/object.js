// object litrals
var person = {
    fname: "jony",
    lname: "parker"
}
console.log(person);
console.log("=====");

// constructore function 
function person2(){
    this.name = "hello";
    this.age = 20;
}
let person3 = new person2()
console.log(new person2);
console.log(person3.name);
console.log(person3.age);
console.log("=====");

for (let i in person2){
    console.log(i);
}

const obj = {name:"hello" , age : 21}
console.log(obj);
obj.name = "raj"
console.log(obj);
obj.age = 56
console.log(obj);
// obj = {name:"jj",age: 56} // here throw an error
console.log("=====");

// property descripter
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
console.log(Object.keys(obj));

function Student(){
    this.name = "hello",
    this.age = 20
}

var student1 = new Student;
console.log(student1);
Object.defineProperty(student1,"name",{writable : false})
student1.name = "hi";
console.log("change name hello to hi=>",student1.name);
console.log(student1);
student1.age = 23;
console.log("change aeg 20 to 23 => ", student1.age);
console.log(student1);

// define new property 
function latest(){
    this.name = "hello"
    this.age = 20
}

let old = new latest()
console.log(old);
console.log(old.name);


// let obj = {
//     name: "ABC",
//     lastName: "xyz",
//     phone: 123,
// }
// console.log(`first =>`, obj);

// obj.name = "raj"
// console.log(`after change name =>`, obj);

// obj.id = "01"
// console.log("Adding new Property id =>", obj);

// delete obj.name
// console.log("delete name property => ", obj)
// console.log("===================");


// /// 
// let data = {
//     movie: {
//         name: "abc",
//         time: "02:50",
//         genre: "comedy"
//     },
//     play: {
//         name: "abc",
//         time: "02:50",
//         genre: "drama"
//     }
// }
// console.log("access only movie =>", data.movie);
// console.log("access only play =>", data.play);
// console.log("===================");

// // values
// console.log("This is obj values", Object.values(obj));
// console.log("This is obj keys", Object.keys(obj));
// console.log("This is obj entries", Object.entries(obj));
// console.log("===================");

// // assing method 

// let obj1 = {
//     name: "ABC",
// }
// let obj2 = {
//     lastName: "xyz",
//     sub: 45
// }
// let obj3 = {
//     name: "hari",
//     lastName: "Dhanani",
//     id: 25
// }

// let obj4 = Object.assign(obj1, obj2, obj3)
// console.log('assign object value => ', obj4);
// console.log("===================");

// //freeze
// Object.freeze(obj1)
// obj1.name = "raj"

// console.log('object1 after freezing =>', obj1);
// console.log("===================");


// // combining of two obj 

// let names = {
//     name: "ABC",
//     age: 26,
//     id: 3,
// }
// let add = {
//     name: "xyz",
//     id: 3,
// }
// console.log({ ...names, ...add });
// console.log(Object.assign("combine two obj", names, add))

// console.log("===================");


// function swapKeysAndValues(obj) {
//     let newObj = {}

//     for (let i in obj) {
//         newObj[obj[i]] = i
//     }
//     return newObj
// }

// let swap = {
//     name: "ABC",
//     id: 6,
// }
// console.log(swapKeysAndValues(swap))
// console.log("===================");


// // Write a function that takes an array of objects and a key, and returns an array of the values corresponding to that key in each object.
// function objs(arrval) {
//     let newarr = []
//     for (let i = 0; i < arrval.length; i++) {
//         newarr.push(arrval[i].name)
//         newarr.push(arrval[i].id)
//     }
//     return newarr
// }
// let arrval = [
//     { name: "ABC", id: 1 },
//     { name: "EFG", id: 2 },
// ]
// console.log(objs(arrval));
// console.log("===================");


// // sort obj by key 

// // Write a function that takes an array of objects and a key, and returns a new array of objects sorted by the values corresponding to that key.


// function sorting(objsort, value) {
//     return objsort.slice().sort((a, b) => a[value] - b[value])
// }


// function sorting(objsort, key) {

//     for (let i = 0; i < objsort.length; i++) {
//         for (let j = 0; j < objsort.length; j++) {
//             if (objsort[i][key] > objsort[j][key]) {
//                 let temp = objsort[i];
//                 objsort[i] = objsort[j];
//                 objsort[j] = temp;
//             }
//         }
//     }
//     return objsort
// }

// let objsort = [
//     {
//         name: "ABC",
//         age: 16,
//     },
//     {
//         name: "EFG",
//         age: 12,
//     },
//     {
//         name: "JKZ",
//         age: 1,
//     },
//     {
//         name: "IoZ",
//         age: 16,
//     },
//     {
//         name: "XYZ",
//         age: 20,
//     }
// ]

// console.log("Sort by age ==>", sorting(objsort, "age"));
// console.log("sort by name ==>", sorting(objsort, "name"));
// console.log("===================");

// // Write a function that takes an array of objects and a key, and returns the object with the highest value for that key.
// let maxObj = [
//     { name: "Siraj", id: 26 },
//     { name: "Agebt", id: 255 },
//     { name: "Binod", id: 50 }
// ]
// let key = "id"
// let result = maxObj.reduce((cur, acc) => cur[key] > acc[key] ? cur : acc, maxObj[0])
// console.log(result);
// console.log("===================");



// // Write a function that takes an array of objects and returns a new object with the sum of values for a specified key.
let total = [
    {amount : 100 , product : "anx"},
    {amount : 250 , product : "opoud"},
    {amount : 530 , product : "appolo"},
    {amount : 230 , product : "appolo"},
]
// let key2 = "amount"
// let result5 = total.reduce((acc,cur)=>{
//     return acc + cur[key2]
// },0)
// console.log("total of amount key",result5);

// let key3 = "product"
// let result6 = total.map((val)=>{
//     return{ key3 : val[key3]}
// })
// console.log(result6);

// // Write a function that takes an array of objects and returns a new array of objects where each object contains a specified key-value pair.
let result7 = total.map((item)=>{
    return Object.entries(item)
})
console.log(result7);


// Write a function that takes an array of objects and returns a new object with keys generated from a specified key in the input objects and values being the corresponding objects.
// let result8 = total.reduce((acc,cur)=>{
//      acc[total[key2]] = cur
//      return acc
// },{})
// let result8 = total.map((val) => {
//     val[key] = total;
//     return val;
// }, {});

// console.log("specifik key data",result8);
let check = [
    { test: "help", num: 12 },
    { test: "medical", num: 52 },
    { test: "bike", num: 522 }
]
let key6 = "num"
let result9 = check.every((val) => {
    return Boolean(val[key6])
})

console.log(result9);



// let result10 = check.some((val)=>{
//     return val > 5
// })
// console.log(result10);