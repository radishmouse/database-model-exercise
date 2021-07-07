function groceryToItem(groceryObject) {
    return `
    <li class="grocery-list-item">
        ${groceryObject.name}
        </li>
    `;
}



function groceryList(arrayofGroceries) {
    const groceryItems = arrayOfTodos.map(groceryItem).join('');
    return `
        <ul>
            ${groceryItems}
        </ul>    


    `;
}


module.exports = groceryList;