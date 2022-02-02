/*
let numbers = [23,17,98,72,15,30,12];

let tempLowest = numbers[0];
let lowest = 0;

for(let i=0; i<numbers.length; i++){
    if(tempLowest > numbers[i]){
        lowest = numbers[i];
    }    
}
console.log(lowest);
*/
/*
let minNumber = Math.min(34,12,78,10,0,-8);
console.log(minNumber);
*/
/*
function fibonacciSeries(num){
   
    total = [0,1];
    let result = 0;

    for(let i=0;i <= num;i++){
        result = total[i] + result;
        total.push(result);
        console.log(result);

    }
}

fibonacciSeries(12);
*/
/*
let numbers = [564,23,98,56,139,14,9,26,120,13]

let largest = numbers[0];

for(let i=0; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }

}
let secondLargest = 0;
for(let j=0;j<numbers.length;j++){
    if(numbers[j] < largest){
        secondLargest = numbers[j];
        if(secondLargest > numbers[j]){
            secondLargest = numbers[j];
        }
    }
}
console.log(secondLargest);
*/
/*
let ages = [8,13,10,13,18,26,90,87,25,26];
let uniqueAges = [];
let duplicate = ages[0];


for(let i=0;i<ages.length;i++){
    uniqueAges.push(ages[i]);
}
for(let x=0;x < ages.length;x++){
    for(y=0;y<uniqueAges.length;y++){
        if(ages[x] == uniqueAges[y]){
            console.log(ages[x])
        }
    }
}
console.log(uniqueAges);
*/
/*
function reverseString(text){
    let letters = text.length-1;
    for(let i=letters ; i>=0;i--){
        console.log(text[i]);

    }
}

reverseString("I am Eshan");
*/

/*
let numList = [23,76,15,75,67,25,10,128];

let largest = numList[0];

for(let num of numList){
    if(num>largest){
        largest = num;
    }
}
console.log(largest);
let secondLargest = numList[0];

for(let number of numList){
    if(number>secondLargest && number<largest){
        secondLargest = number;
    }
}
console.log(secondLargest)
*/
/*
function isPrime(num){
    let flag = true;
    for(i=2;i<num;i++){
        if(num%i == 0){
            flag = false;
            break;  
        }

    }

    if(flag == false){
        return false;
    }
    else{
        return true;
    }
}

console.log(isPrime(11));
*/

function onlyPositive(numList){
    let onlyPositiveNumList = [];
    for(num of numList){
        if(num < 0){
            break;
        }
        else{
            onlyPositiveNumList.push(num);
        }
    }

    return onlyPositiveNumList;
}

numList = [12,18,0,-923,28,298,-13,109,38,12,30,76];

console.log(onlyPositive(numList));