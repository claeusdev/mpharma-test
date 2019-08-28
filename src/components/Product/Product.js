import React, { useState } from "react";
import { ProductItem } from "../Styles";
import moment from "moment";

function Product({ product, deleteProduct, updateProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.prices[0].price)

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const calcLatestPrice = prices => {
    let closeDate = prices.map(price => moment(price.date));
    let latestPrice = prices.find(
      price =>
        price.date === moment.max(closeDate)._i);
    return latestPrice && latestPrice.price;
  };

  const handleUpdate = (e) => {
    e.preventDefault()
    product.name = name
    product.prices[0].price = price

    updateProduct(e, product)
    setName('')
    setPrice('')
    setIsEditing(false)
  }

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
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
      ) : (
        <ProductItem key={product.id}>
          <div className="details">
            <h1>{product.name}</h1>
            <p>Latest Price: GHS {calcLatestPrice(product.prices)}</p>
          </div>
          <div className="actions">
            <span onClick={toggleEditing}>edit</span>
            <span onClick={e => deleteProduct(e, product)}>delete</span>
          </div>
        </ProductItem>
      )}
    </>
  );
}

export default Product;
