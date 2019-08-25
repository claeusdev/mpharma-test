import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Product from "./Product";

const product = {
  id: 1,
  name: "Exforge 10mg",
  prices: [{
    id: 1,
    date: Date.now(),
    price: 10
  }]
}

test("renders product correctly", async () => {
  const { getByText } = render(<Product product={product}/>);
  expect(getByText('Exforge 10mg')).toBeTruthy()
});

test("delete product from state", async () => {
  const deleteProduct = jest.fn()
  const { getByText} = render(<Product product={product} deleteProduct={deleteProduct}/>);
  fireEvent.click(getByText("delete"));
  expect(deleteProduct).toHaveBeenCalledTimes(1)
});