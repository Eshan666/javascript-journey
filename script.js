/*
console.log(5)
console.log(54)
// console.log(5)
// console.log(5)

var nameOfAnimal = "tiger";
var gender = "male";

var genderAndNameOfAnimal = nameOfAnimal+ gender;
console.log(genderAndNameOfAnimal);
console.log(typeof (genderAndNameOfAnimal));
var price = 65.5
console.log(typeof price)
console.log(parseInt(price))
var age = "75.45454";
console.log(parseFloat(age));
var ageInFloat = parseFloat(age)
var ageInInteger = parseInt(age)
console.log(ageInFloat);
console.log(ageInInteger);
console.log(typeof ageInFloat);
console.log(ageInFloat.toFixed(1));
*/
console.log("js file connected");
let titles = document.getElementsByTagName('h3');

for(let title of titles){
    //console.log(title.style);
    title.style.textAlign = 'center';
    title.style.border = '2px solid black';


}
//console.log(titles);

let element = document.getElementsByTagName[0];

let postList = document.getElementById("post-list");

let heading = document.createElement("h3");
heading.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa amet, atque repellat cupiditate aut voluptate!"

let paragraph = document.createElement("p");
paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sint doloremque exercitationem odio dolores hic, tempora accusantium atque delectus rerum dignissimos voluptatem? Ab beatae perferendis voluptates facilis, soluta quos at laudantium, aut unde, ea ratione itaque quas tenetur vitae velit!'

postList.appendChild(heading);
postList.appendChild(paragraph);

let  e = document.getElementById("hablu-mail");
let  b = document.getElementById("hablu-btn");
let  bablu = document.getElementById("bablu");
console.log(e);
console.log(b);
e.addEventListener("keyup", function (event) 
{
    event.preventDefault();
    console.log(e.value);
    bablu.innerText = e.value;

    /*
    if(e.value == "eshanahmed49@gmail.com"){
        b.disabled = false;
    }
    else{
        b.disabled = true;
    }
    */
    
});



