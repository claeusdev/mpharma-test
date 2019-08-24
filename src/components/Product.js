import React, { useState } from "react";
import Form from "./Form";

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
        <h1 key={product.id}>
          {product.name} <span onClick={toggleEditing}>edit</span>
          <span onClick={e => deleteProduct(e, product)}>X</span>
        </h1>
      )}
    </>
  );
}

export default Product;
