const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul#ingredients')

const groupOfItems = ingredients.reduce((acc, listItem) => {
  const ingredient = document.createElement('li')
  ingredient.textContent = listItem
  ingredient.classList.add('item')
  acc.push(ingredient)
  return acc
}, [])

ingredientsList.append(...groupOfItems)

