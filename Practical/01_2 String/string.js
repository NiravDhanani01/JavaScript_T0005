let str = "Hello Good Morning 123"

// char Count  
let charCount = str.trim().length
console.log("Here Total character is =>", charCount);

// only words not number 
let regex = /[^a-zA-Z]/gi
console.log("only character count not a number");
console.log(str.replace(regex, "").length)
console.log("======");

// word count 
let words = str.split(" ")
console.log("Words count");
console.log(words.length);
console.log("======");


// frequency of obj 
let frequency = {}
console.log("Check Frequency")
for(let i=0;i<str.length;i++){
    let ch = str.charAt(i)
    if(frequency[ch] > 0){
        frequency[ch]++ 
    } else {
        frequency[ch] = 1
    }
}
console.log(frequency);
console.log("============");
