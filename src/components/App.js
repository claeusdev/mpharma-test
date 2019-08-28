import React from 'react';
import { connect } from "react-redux";
import { getAllProducts, addProduct, removeProduct, onUpdateProduct, updateProduct } from "../redux/actions";
import Form from './NewProductForm';
import Product from './Product';
import { Container, FormField, ProductList } from './Styles';

function App({products, onAddProduct, onDeleteProduct, onUpdateProduct}) {
  
  const deleteProduct = (e, product) => {
    e.preventDefault();
    onDeleteProduct(product);
  };

  const updateProduct = (e, product) => {
    e.preventDefault()
    onUpdateProduct(product)
  }

  
  return (
    <div className="App">
      <Container>
        <FormField>
          <Form onAddProduct={onAddProduct} />
        </FormField>
        <ProductList>
          <div data-testid="product-list">
            {products &&
              products.map(product => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    deleteProduct={deleteProduct}
                    updateProduct={updateProduct}
                  />
                );
              })}
          </div>
        </ProductList>
      </Container>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onGetAllProducts: dispatch(getAllProducts()),
    onAddProduct: product => dispatch(addProduct(product)),
    onDeleteProduct: product => dispatch(removeProduct(product)),
    onUpdateProduct: product => dispatch(updateProduct(product))
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