let list = document.getElementById("item-list");
let listBtn = document.getElementById("increasing-button");

console.log(list);
let number = 1;
listBtn.addEventListener("click",function(event){
    event.preventDefault();
    let element = document.createElement("li");
    element.setAttribute('class','item');
    element.setAttribute('id','item'+number);
    element.innerText = "Lichi "+number;
    console.log(element);
    list.appendChild(element);
    if(number>5){
        listBtn.disabled = true;
    }
    number++;
})

let inputField = document.getElementById("input-field");
console.log(inputField);
let increaseBtn= document.getElementById("submit-btn");
console.log(increaseBtn);
let count = inputField.value;
count = parseInt(count);
console.log(count);

increaseBtn.addEventListener("click",function(event){
    event.preventDefault();
    count++
    inputField.value = count;
    if(count > 5){
        increaseBtn.style.color = "white";
        increaseBtn.style.backgroundColor = "red";
        increaseBtn.innerText = "Enough!!";
        increaseBtn.disabled = true;
    }
    

})

