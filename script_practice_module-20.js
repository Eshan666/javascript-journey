
function isLeapYear(year){
    if(year%4 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(2023));


function isAgeOddOrEven(age){
    if(age%2 == 0){
        return true;
    }
    else if(age % 2 != 0){
        return false;
    }
}

console.log(isAgeOddOrEven(0))



function converHourToMinute(hour){
    return hour*60;
}

console.log(converHourToMinute(0.5))


function factorial(number){
    let result = 1;
    for(i=1;i <= number; i++){
        result = result* i;
    }
    return result;
}

console.log(factorial(4))
*

function factorial(number){
    let result=1;
    let i=1;
    while(i <= number){
        result = result * i;
        i++;
    }
    return result;
}

console.log(factorial(3));