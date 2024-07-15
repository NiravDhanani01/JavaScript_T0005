// let array = ["car","bus","bike",1,2,3,6,5,9,10];

// console.log(array);
// //array methods

// let newarr = array.map((item)=>item)
// console.log("Copy of array =>",newarr);

// let filter = array.filter((item)=>item%2 == 0)
// console.log("filter array =>",filter);

// let sum = [1,2,3,4,5,6]
// let initial = 0
// let reduce = sum.reduce((acc,cur)=>
//  acc + cur , initial)

// console.log("Reducer =>",reduce);

// console.log("array length is =>",array.length);

// // push method
// sum.push(5)
// console.log("array after push =>",sum);
// //pop method
// sum.pop()
// console.log("array after pop =>",sum);

// //shift
// sum.shift()
// console.log("array after shift =>",sum);

// // unshift
// sum.unshift(10)
// console.log("array after unshift =>",sum);

// // find
// let Find = sum.find((item)=>item%2==0)
// console.log('array after find => ',Find);

// let fill = [1,2,3,8,6,7]
// console.log("array after fill" ,fill);

// // indexOf
// let index = fill.indexOf(8)
// console.log("index of =>",index);

// //lastundex of
// let lastindex = fill.lastIndexOf(6)
// console.log("last index of =>",lastindex);

// let findIndex = fill.findIndex(num=>num==3)
// console.log("find index of =>",findIndex)

// // includes
// let include= fill.includes(144)
// console.log("include of 1 is =>" ,include);

// let splicearr = [1,2,3,8,6,7]
// let spli = splicearr.splice(1,3)
// console.log("splie of array =>",spli);

// // short 
// let arrSort = [1,2,3,4,8,6,9,7,"a","b","c"]
// let ashort = arrSort.sort()
// console.log("Sort of array ascending =>",ashort);
// let dshort = arrSort.reverse()
// console.log("Sort of array descending =>",dshort);

// let aarrSplice = [0,2,5]
// aarrSplice.splice(1,0,"a")
// console.log("splice of array =>",aarrSplice);

// // toString
// let arrToString = [1,2,3,4,5]
// console.log("string array =>",arrToString.toString());

// let newarra =  arrToString.concat(arrSort)
// console.log("concate new array =>",newarra);

// // every
// let every = arrToString.every((item)=>item<0)
// console.log("every item is greater than 0 =>",every);

// // slice
// arrToString.slice(1)
// console.log("slice of array =>",arrToString.slice(1));

// // at
// let atindex = arrToString.at(2)
// console.log("at index =>",atindex);

// // flate
// let flat = [1,2,3,4,[6,7,[5]]]
// console.log("sub aaray =>",flat);
// let flatarr = flat.flat(Infinity)
// console.log(`array after flat`,flatarr);
// // flat combine sub-array in to main aaray

// charAt()
// let text = "hello World"
// console.log(text.charAt(0).toUpperCase());

// // merge two array 
// let arr1 = [1,2,3,4,5,6,7,8]
// let arr2 = [2,4,5]
// let arr3 = arr1.concat(arr2)
// console.log(arr3);

// // replace 
// let textss = "hello World"
// console.log(textss.replace("World","Nirav"));

// substring
// let arr = "hello World"
// console.log(arr.substring(4,5));

// match
// let texts = "gain main plaIn"
// console.log(texts.match("ain"));

// // Write an array of numbers and returns a new array with each number doubled.
// let Narray = [1, 2, 3, 4];
// for (let i = 0; i < Narray.length; i++) {
//   console.log(Narray[i] * 2);
// }
// let arry2 = array.map((num) => {
//   return num * 2;
// });
// console.log(arry2);
// console.log("========================");

// // Write a string and returns the number of vowels in the string.
// let vowel = "aeiouAEIOU";
// let str = "hello Worldee";
// let cnt = 0;

// for (let i of str) {
//   if (vowel.includes(i)) {
//     cnt++;
//   }
// }
// console.log(cnt);
// console.log("======================");

// // Write array of numbers and returns the largest number in the array.

// let array3 = [1, 55, 669, 2, 353];
// console.log(Math.max(...array3));
// console.log("======================");

// // Write a string and returns the string with the first letter of each word capitalized.
// let str2 = "hello world";
// let newString = str2
//   .split(" ")
//   .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//   .join(" ");
// console.log(newString);
// console.log("======================");

// // Write an array of numbers and returns a new array with only the even numbers.

// let array4 = [1, 5, 6, 9, 3, 4, 10, 0, 2, 5];
// let newarray4 = array4.filter((item) => item % 2 === 0);
// console.log(newarray4);
// console.log("======================");

// // Write a function that takes a number and returns true if the number is prime, and false otherwise.

// function prime(num) {
//   if (num > 0) {
//     for (let i = 2; i <= num * num; i++) {
//       if (num % 2 === 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(prime(3));
// console.log("======================");

// // Write a function that takes an array  and returns the frequent element in the array.
// function frequentCheck(arr) {
//   let freq = {};
//   arr.forEach((elem) => {
//     if (str.hasOwnProperty()) {
//       freq[elem]++;
//     } else {
//       freq[elem] = 1;
//     }
//   });
//   return freq;
// }

// console.log(frequentCheck([1, 2, 3, 4, 4, 1, 0,0]));
// console.log("======================");


// // write a function to get the last element of an Array. passing a parameter 'n' will return the first 'n' element of the array

// function getLastElement(arr,n) {

//   for (let i = 0; i < n;i++) {
//     console.log(arr[i]);
//   }
// }
// getLastElement([1, 2, 5, 3, 8],3);
// console.log("======================");


// fibonaci series 
// function fib(n) {
//   if (n == 1) return [0];
//   if (n == 2) return [0, 1];    
//   let arr = fib(n - 1)
//   return [...arr, arr[arr.length - 1] + arr[arr.length - 2]]
// }
// console.log("test 1 =>", fib(1));
// console.log("test 2 =>", fib(2));
// console.log("test 3 =>", fib(3));
// console.log("test 4 =>", fib(4));
// console.log("test 5 =>", fib(5));


// Write a function that takes a string and returns the most frequent character in the string.
// function mostfrequant() {
//   let str = "hello world";
//   let freq = {};
//   for (let i in str) {
//     if (freq.hasOwnProperty(str[i])) {
//       freq[str[i]]++;
//     } else {
//       freq[str[i]] = 1;
//     }
//   }

//   let max = 0;
//   let maxChar = "";
//   for (let val in freq) {
//     if (freq[val] > max) {
//       max = freq[val];
//       maxChar = val;
//     }
//   }
//   return maxChar;
// }

// console.log(mostfrequant());

// Write a function that takes two arrays and returns a new array with elements that are present in both arrays.
// function commonElements() {
// let arr1 = [1,8,3,4,5,6]
// let arr2 = [4,5,6,7,8]
// let arr3 = arr1.filter((item)=>arr2.includes(item))
// console.log(arr3);
// }

// commonElements();

// Write a function that takes an array of objects and returns a new array with the objects sorted by a specified key.