console.log("vollected!")

let generateMeals = async (url) => {

    const response = await fetch(url);
    let allMeals = await response.json();
    allMeals = allMeals.meals;
    console.log(allMeals);
    for(let meal of allMeals){
        //console.log(meal);
        console.log(meal.strMeal);
        console.log(meal.strCategory);
        console.log(meal.strMealThumb);
        let container  = document.getElementById('meal-container');

        let mealElement = document.createElement('div');
        mealElement.setAttribute('class','col-lg-4 col-sm-12 mx-sm-auto');
        //mealElement.setAttribute('class','col-sm-12');
        mealElement.innerHTML = `
        <div class="card" style="width: 22rem;">
            <img src=${meal.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                <p class="card-text">${meal.strTags}</p>
                <p class="card-text">${meal.strArea}</p>
                <a href=${meal.strYoutube} class="btn btn-primary">See full video</a>
                
                    </div>
                </div>

            `;

        container.appendChild(mealElement);


    }

    

}

let searchBtn = document.getElementById('search-btn');
let input = document.getElementById('input');
let mealContainer = document.getElementById('meal-container');

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    mealContainer.textContent = '';
    generateMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    

})

//console.log(generateMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=fish'));
