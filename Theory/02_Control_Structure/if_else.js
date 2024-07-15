// greatest Number of Three num
let x = 2;
let y = 5;
let z = 40;

if (x > y) {
    if (x > z) {
        console.log(` x is large number`);
    } else {
        console.log(`z is large number`);
    }
} else {
    if (z > y) {
        console.log(`z is greater number`);
    } else {
        console.log(`y is grater number`);
    }
}

console.log("===========================");

// multiple of 3 and 5

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} Both`);
    } else if (i % 5 == 0) {
        console.log(`${i} only 5`)
    } else if (i % 3 == 0) {
        console.log(`${i} only 3`);
    }
    else {
        console.log(`${i}`);
    }
}
console.log("===========================");


