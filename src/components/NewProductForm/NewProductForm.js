import React, { useState } from "react";
import uuid from "uuid/v4";
import moment from "moment";

function Form({ handleSubmit }) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const data = {
    id: uuid(),
    name,
    prices: [
      {
        id: uuid(),
        price: parseInt(price),
        date: moment(Date.now())
      }
    ]
  };
  return (
    <form onSubmit={e => handleSubmit(e, data)}>
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
