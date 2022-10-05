let number = 266219;

let string = String(number);

let str;
str = string[0] * string[1] * string[2] * string[3] * string[4] * string[5];
console.log(str);

let str2 = str ** 3;
console.log(str2);

str2 = String(str2);

console.log(str2.slice(0, 2));