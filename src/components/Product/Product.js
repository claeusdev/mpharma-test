import React, { useState } from "react";
import Form from "../NewProductForm";
import { ProductItem } from "../Styles";
import moment from "moment";

function Product({ product, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const calcLatestPrice = prices => {
    let closeDate = prices.map(price => moment(price.date));
    let latestPrice = prices.find(
      price =>
        price.date === moment.max(closeDate)._i);
    return latestPrice.price;
  };
  return (
    <>
      {isEditing ? (
        <Form product={product} />
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
