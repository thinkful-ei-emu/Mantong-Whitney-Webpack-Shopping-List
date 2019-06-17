import $ from 'jquery';

function main() {
  console.log('DOM is loaded');


  const startMsg = $(
    `<div class="container">
  <div class="error-container"></div>
  <h1>Shopping List</h1>
  <form id="js-shopping-list-form">
    <label for="shopping-list-entry">Add an item</label>
    <input type="text" name="shopping-list-entry" class="js-shopping-list-entry" placeholder="e.g., broccoli">
    <button type="submit">Add item</button>
    <div>
      <input type="checkbox" id="filter-checked" class="filter-checked js-filter-checked" />
      <label for="filter-checked">Hide Checked</label>
    </div>
    <div>
      <label for="js-shopping-list-search-entry">Search:</label>
      <input type="text" name="shopping-list-search-entry" class="js-shopping-list-search-entry" />
    </div>
  </form>
  <ul class="shopping-list js-shopping-list">
  </ul>
</div>`
);
  $('#root').append(startMsg);
}

 $(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

$(main);
