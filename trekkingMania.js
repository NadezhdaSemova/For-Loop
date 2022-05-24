function trekkingMania(input){
let numberGroups = Number(input[0]);
let index = 1;

let total = 0;
let countMusala = 0;
let countMonblan = 0;
let countKilimandjaro = 0;
let countK2 = 0;
let countEverest = 0;

for (let i = 1; i <= numberGroups; i++) {
   let number = Number(input[index]);
   index++;
   total += number;
    if (number <= 5){
countMusala += number;
    }else if(number <=12){
countMonblan += number;
    }else if(number <= 25){
countKilimandjaro += number;
    }else if(number <= 40){
countK2 += number;
    } else{
countEverest += number;
    }
}
let percentMusala = (countMusala / total) * 100;
let percentMonblan = (countMonblan / total) * 100;
let percentKilimandjaro = (countKilimandjaro / total) * 100;
let percentK2 = (countK2 / total) * 100;
let percentEverest = (countEverest / total) * 100;

console.log(`${percentMusala.toFixed(2)}%`);
console.log(`${percentMonblan.toFixed(2)}%`);
console.log(`${percentKilimandjaro.toFixed(2)}%`);
console.log(`${percentK2.toFixed(2)}%`);
console.log(`${percentEverest.toFixed(2)}%`);
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

