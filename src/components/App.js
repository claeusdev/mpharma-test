import React from 'react';
import { connect } from "react-redux";
import { getAllProducts } from "../redux/actions";

function App({products}) {
  return (
    <div className="App">
      {products &&
        products.map(product => {
          return (
            <h1 key={product.id}>
              {product.name}
            </h1>
          );
        })}
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    onGetAllProducts: dispatch(getAllProducts()),
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