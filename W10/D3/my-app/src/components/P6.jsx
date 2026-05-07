//event delegation in react 
//instead of attaching a seperate click handler to every
//element we attach one handler to the parent 
//parent -> child 
//Bubbles up to the parent 
//why is it used ?
//reduces repeated event handlers
//code is cleaner and manageable
//its useful when rendering many similar items
import { useState } from 'react';

export function EventDelegation() {
  const [selectedItem, setSelectedItem] = useState('None');

  // Parent click handler
  const handleListClick = (event) => {
    const clickedItem = event.target.closest('li[data-item]');

    if (!clickedItem) return;

    const itemName = clickedItem.dataset.item;

    console.log('Clicked Item:', itemName);
    setSelectedItem(itemName);
  };

  return (
    <section>
      <h2>Event Delegation</h2>

      <ul onClick={handleListClick}>
        <li data-item="Laptop">Laptop</li>
        <li data-item="Mobile phone">Mobile phone</li>
        <li data-item="Car">Car</li>
      </ul>

      <p>Selected: {selectedItem}</p>
    </section>
  );
}