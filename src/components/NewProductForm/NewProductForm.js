import React, { useState } from "react";
import uuid from "uuid/v4";
import moment from "moment";

function Form({ onAddProduct }) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuid(),
      name,
      prices: [
        {
          id: uuid(),
          price,
          date: moment(Date.now())
        }
      ]
    };
    onAddProduct(data);
    setName('')
    setPrice(0.00)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        {" "}
        Name
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label htmlFor="price">
        {" "}
        Price
        <input
          type="number"
          step="0.01"
          min="0"
          name="price"
          id="price"
          value={price}
          onChange={e => setPrice(e.currentTarget.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
