let phone = {
    id: 12,
    name: "samsung",
    price: 30000,
    address: {
        country: "Bangladesh",
        planet : "Earth",

    }
};

let phonePrice = `The price of phone is ${phone.price}`;
let {address} = phone;
let {country} = address;

console.log(address.planet);
console.log(country);

console.log(phonePrice);

let divideByFive = num => num/5;
console.log(divideByFive(26));

let addMult = (num1,num2) => (num1+2) * (num2+2);

console.log(addMult(3,3));


let cars = [5,7,12,4,7];

let newCars = cars.map(car => car*5);
console.log(newCars);

console.log(cars);



let human = {
    age:20,
    color:{
        indian : "brown",
        african : "black",
        foreigners :{
            british : ["black","white"]
        }
    }
}

console.log(human.color.foreigners.british);
