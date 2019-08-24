import React, { useState } from "react";
import Form from "../NewProductForm";
import { ProductItem } from "../Styles";

function Product({ product, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  return (
    <>
      {isEditing ? (
        <Form product={product} />
      ) : (
          <ProductItem key={product.id}>
            <div className="details">
              <h1 key={product.id}>
            {product.name}</h1>
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
