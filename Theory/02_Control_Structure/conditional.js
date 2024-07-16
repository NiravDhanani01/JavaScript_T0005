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

// switch Case

let a = "good_by"

switch (a) {
    case "say_hello":
        console.log(`say_hello`);
        break;
    case "good_by":
        console.log(("goodby"));
        break;
    default:
        console.log(`Empty`);
}

console.log("===========================");

let mark = 95;

switch (true) {
    case mark >= 90:
        console.log("A+ Gread");
        break;
    case mark >= 80 && mark < 90:
        console.log("A Gread");
        break;
    case mark >= 70 && mark < 80:
        console.log("B+ Gread");
        break;
    case mark >= 60 && mark < 70:
        console.log("B Gread");
        break;
    case mark >= 50 && mark < 60:
        console.log("c Gread");
        break;
    case mark >= 40 && mark < 50:
        console.log("D Gread");
        break;
    case mark >= 30 && mark < 40:
        console.log("Fail");
        break;
    default : {
        console.log("F Gread");
    }
}
