import React from 'react';
import { connect } from "react-redux";
import { getAllProducts, addProduct, removeProduct } from "../redux/actions";
import Form from './NewProductForm';
import Product from './Product';

function App({products, onAddProduct, onDeleteProduct}) {
  const handleSubmit = (e, data) => {
    e.preventDefault();
    onAddProduct(data);
  };

  const deleteProduct = (e, product) => {
    e.preventDefault();
    onDeleteProduct(product);
  };

  
  return (
    <div className="App">
      <Form onAddProduct={onAddProduct} handleSubmit={handleSubmit} />
      <div data-testid="product-list">
        {products &&
          products.map(product => {
            return (
              <Product
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
              />
            );
          })}
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onGetAllProducts: dispatch(getAllProducts()),
    onAddProduct: product => dispatch(addProduct(product)),
    onDeleteProduct: product => dispatch(removeProduct(product))
  };
};

const mapStateToProps = state => {
  return {
    products: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);