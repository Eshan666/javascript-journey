console.log("added");
let inputField = document.getElementById("input-field");
let addBtn = document.getElementById("add-button");
let aLLNotes = document.getElementById("all-notes");
console.log(inputField);
console.log(addBtn);


addBtn.addEventListener("click",function(event){
    event.preventDefault();
    let element = document.createElement("div");
    element.innerHTML = `<div class="mt-5 mx-auto">
    <div class="card text-dark bg-warning mb-3 mx-auto" style="max-width: 60rem;">

        <div class="card-body">
            <p class="card-text">`+inputField.value+`</p>
                <span class="ms-2"><button type="button" class="btn btn-danger btn-sm" onclick="deleteTask(event)">Delete</button></span>
        </div>
    </div>

     </div>`;
    aLLNotes.appendChild(element);
    inputField.value = "";

})


function deleteTask(event){
    event.preventDefault();
    console.log("clicked delete");
    event.target.parentElement.parentElement.parentElement.parentElement.style.display = "none";
}