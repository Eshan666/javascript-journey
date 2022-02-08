//problem 1
function anaToVori(ana){
    if(typeof(ana) != 'number'){
        return "Please enter a valid number";
    }
    else if(ana < 0){
        return "ana value cannot be negative";
    }
    return ana/16;
}




//problem 2
function pandaCost(shingara,somucha,jilapi){
    if(typeof(shingara) != 'number' || typeof(somucha) != 'number' || typeof(jilapi) != 'number'){
        return 'Value must be a number!!';
    }
    else if(shingara < 0 || somucha <0 || jilapi <0){
        return 'amount of food cannot be negative!';
    }
    const costOfShingara = 7;
    const costOfSomucha = 10;
    const costOfJilapi = 15;

    let totalShingaraCost = (shingara*costOfShingara);
    let totalSomuchaCost = (somucha*costOfSomucha);
    let totalJilapiCost = (jilapi*costOfJilapi);

    let totalCost = totalJilapiCost+totalShingaraCost+totalSomuchaCost;
    return totalCost;

}



//problem 3

function picnicBudget(numberOfPerson){
    let costForFirstHundred = 5000;
    let costForSecondHundred = 4000;
    let costForRest = 3000;
    if(typeof(numberOfPerson) != 'number'){
        return 'Total people must have to be a number!!';
    }
    else if(numberOfPerson < 0){
        return 'Number of people cannot be negative!!';
    }
    else if(numberOfPerson>=0 && numberOfPerson <= 100){
        
        return costForFirstHundred*numberOfPerson;
    }
    else if(numberOfPerson >100 && numberOfPerson <= 200){
        let firstSegment = 100;
        let firstSegmentCost = firstSegment * costForFirstHundred;
        let restSegment = numberOfPerson - 100;
        let restSegmentCost = restSegment * costForSecondHundred;

        return firstSegmentCost + restSegmentCost;


    }

    else if(numberOfPerson >200){
        let firstSegment =100;
        let secondSegment =100;
        let firstAndSecondSegment = firstSegment + secondSegment;
        let restSegment = numberOfPerson - firstAndSecondSegment;
        let firstSegmentCost = 100 * costForFirstHundred;
        let secondSegmentCost = 100 * costForSecondHundred;
        let restSegmentCost = restSegment * costForRest;

        let totalCost = firstSegmentCost+ secondSegmentCost + restSegmentCost;
        return totalCost;

    }
}

console.log(picnicBudget(120))




//problem 4

function oddFriend(friendNames){
    if(typeof(friendNames) == 'number' || typeof(friendNames) == 'boolean'|| typeof(friendNames) == 'string'){
        return 'An array is expected!';
    }
    else if(friendNames.length == 0){
        return 'array is empty!';
    }
    for(let i=0;i<friendNames.length;i++){
        if(friendNames[i].length % 2 != 0){
            return friendNames[i];
        }
    }
    
}



