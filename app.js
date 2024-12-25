// Function to add a grocery item
function addItem() {
    const inputField = document.getElementById('itemInput');
    const itemName = inputField.value.trim();
  
    if (itemName !== '') {
      const groceryList = document.getElementById('groceryList');
      const li = document.createElement('li');
  
      // Display item name
      li.textContent = itemName;
  
      // Create edit button
      const editButton = document.createElement('button');
      editButton.className = 'edit';
      editButton.textContent = '✏️';
      editButton.onclick = function () {
        editItem(li, itemName);
      };
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete';
      deleteButton.textContent = '❌';
      deleteButton.onclick = function () {
        deleteItem(li);
      };
  
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      groceryList.appendChild(li);
      inputField.value = ''; // Clear input after adding item
    }
  }
  
  // Function to edit an item
  function editItem(li, oldName) {
    const newName = prompt('Edit item:', oldName);
    if (newName && newName.trim() !== '') {
      li.firstChild.textContent = newName.trim(); // Update the name
    }
  }
  
  // Function to delete an item
  function deleteItem(li) {
    if (confirm('Are you sure you want to delete this item?')) {
      li.classList.add('removed');
      setTimeout(() => li.remove(), 500); // Wait for animation to finish before removing
    }
  }
  