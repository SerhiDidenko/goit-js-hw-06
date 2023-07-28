const categories = document.querySelector('ul#categories');
const categoryList = Array.from(categories.children)

console.log(`Number of categories: ${categoryList.length}`)

categoryList.forEach(category => {
    console.log(`
Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`);
});