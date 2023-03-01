 const  loadFood=(searchValue)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFood(data.meals))
 }

  const displayFood =(meals)=>{
//    console.log(meals);
   const container =document.getElementById('card-container');
   container.innerHTML='';
meals.forEach(meal => {
    // console.log(meal)
    const div = document.createElement('div');
    div.classList.add('col')
  div.innerHTML=`
  <div class="col">
  <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>
    </div>
  </div>
</div>
  
  
  `;
  container.appendChild(div);
    
});
}
   const searchText=()=>{
    const searchValue =document.getElementById('search-field').value;
    
    // console.log(searchValue);
    loadFood(searchValue);
  
   }
   
   const loadMealDetails=(idMeal)=>{

    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayModal(data.meals[0]))

   }

   const displayModal=food=>{
    document.getElementById('exampleModalLabel').innerText=food.strMeal;
    const modalBody =document.getElementById('modal-body-title');
    modalBody.innerHTML=`
    <img class="img-fluid" src="${food.strMealThumb}" alt="">
    `
   }
   

loadFood('chicken')

 