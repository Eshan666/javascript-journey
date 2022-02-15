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


