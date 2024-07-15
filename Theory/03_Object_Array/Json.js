let obj = {
    Id : 5,
    name : "Abc",
    age : 25,
}

let data = JSON.stringify(obj)
console.log("Stringify data =>",data);
let getdata = JSON.parse(data)
console.log("Parse data =>",getdata);