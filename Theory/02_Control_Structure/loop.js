// Write a number n and prints all numbers from 1 to n.
console.log("one");
let n=5;
for(let i=1;i<=n;i++){
    console.log(i);
}
console.log("==============================");

// Write an array of numbers and prints each number.
console.log("two");
let arr = [1,2,8,4,5,4]
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("==============================");

// while loop

console.log("four");
let i=1;
while(i<=10){
    console.log(`${10} * ${i} = ${i*10}`);
    i++
}
console.log("==============================");

// odd even
console.log("five");
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is Even numbre`);
    } else {
        console.log(`${i} is Odd nummber`);
    }
}
console.log("================================");

// do-while
let j = 0;
do{
    console.log(`text is ${j}`);
    j++
} while(j<=5)

