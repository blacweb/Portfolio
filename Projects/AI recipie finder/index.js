// const Api_Key="d3279b3d1bb64a95af5f0c3e7f329ca9";
const ingredients = ['chicken', 'rice','onion','tomato','grean chlli'];
const encodedIngredients = encodeURIComponent(ingredients.join(','));
const apiKey = 'd3279b3d1bb64a95af5f0c3e7f329ca9';  // Replace with your actual key
const id=document.querySelector(".id");

const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodedIngredients}&number=10`;

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  })
  .then(data => console.log('Recipes:', data ,id.innerHTML=data[0].id))
  .catch(error => console.error('Fetch error:', error));
  

const url_ins = `https://api.spoonacular.com/recipes/23456/analyzedInstructions?apiKey=${apiKey}`;

fetch(url_ins)
  .then(response => {
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  })
  .then(data => console.log('Instruction:', data))
  .catch(error => console.error('Fetch error:', error));
// id.innerHTML=`${data[0].id}`