import React, { useState } from "react";
import "./UserInput.css"

const UserInput = ({ setInputData, setInputHasEntered }) => {
  const [numItems, setNumItems] = useState(0); // Number of items
    const [capacity, setCapacity] = useState(0); // Knapsack capacity
    const [items, setItems] = useState([]); // Array of items (weight, value)

    const handleNumItemsChange = (value) => {
        const itemCount = parseInt(value) || 0;
        if(itemCount < 0) {
          alert('cannot be negative number!');
        }
        else {
          setNumItems(itemCount);
          setItems((prevItems) => {
              const updatedItems = Array(itemCount)
                  .fill(0)
                  .map((_, idx) => prevItems[idx] || { weight: 0, value: 0 });
              return updatedItems;
          });
        }
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items]; // Create a copy of the current items array
        updatedItems[index] = {
            ...updatedItems[index], // Copy the current object at this index
            [field]: parseInt(value) || 0 // Dynamically update the correct field
        };
        setItems(updatedItems); // Update the state with the new array
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ numItems, capacity, items });

        if(numItems === 0 || capacity === 0 || items.some(item => item.weight === 0 | item.value === 0))
        {
            alert("Please fill in all fields!");
            return;
        }
       setInputData({ numItems, capacity, items });
       setInputHasEntered(true);
    }

    return (
        <div className="page-container">
        <div className="form-container">
          <h1>Knapsack Problem Input</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Number of items:
              <input
                type="number"
                value={numItems}
                onChange={(e) => handleNumItemsChange(e.target.value)}
                placeholder="Enter number of items"
              />
            </label>
            <br />
            <label>
              Knapsack Capacity:
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(parseInt(e.target.value) || 0)}
                placeholder="Enter knapsack capacity"
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      
        <div className="items-container">
          {items.map((item, index) => (
            <div key={index} className="item-card">
              <h3>Item {index + 1}</h3>
              <label>
                Weight:
                <input
                  type="number"
                  value={item.weight}
                  onChange={(e) => handleItemChange(index, "weight", e.target.value)}
                  placeholder="Enter weight"
                />
              </label>
              <br />
              <label>
                Value:
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => handleItemChange(index, "value", e.target.value)}
                  placeholder="Enter value"
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    );
}

export default UserInput;