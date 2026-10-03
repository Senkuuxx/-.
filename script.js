let numbers1 = [5, 8, 12];
numbers1[1] = 10;
console.log(numbers1);


// 2
let strings = ["рядок1", "рядок2", "рядок3"];
strings.push("рядок4");
console.log(strings);


// 3
let numbers2 = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
}

console.log(sum);


// 4
let numbers3 = [3, 7, 12, 18, 25];

for (let i = 0; i < numbers3.length; i++) {
    console.log(numbers3[i]);
}


// 5
let strings2 = ["кіт", "машина", "програмування", "дім", "телефон"];

for (let i = 0; i < strings2.length; i++) {
    if (strings2[i].length > 5) {
        console.log(strings2[i]);
    }
}


// 6
let numbers4 = [12, 45, 7, 89, 23, 56, 34, 91, 18, 63];

let max = numbers4[0];

for (let i = 1; i < numbers4.length; i++) {
    if (numbers4[i] > max) {
        max = numbers4[i];
    }
}

console.log(max);


// 7
let numbers5 = [3, 8, 15, 22, 17, 40, 51, 64, 9, 10];

for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] % 2 === 0) {
        console.log(numbers5[i]);
    }
}