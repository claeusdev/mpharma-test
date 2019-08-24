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

// test("renders product on page", () => {
//     const { getByText, getByTestId, get } = render(<Product product={product} />);
//     expect()

// })
test("sets form to editing state", async () => {
  const { getByText } = render(<Product product={product}/>);

  fireEvent.click(getByText("edit"));

  
});

test("delete product state", async () => {
  const deleteProduct = jest.fn()
  const { getByText } = render(<Product product={product} deleteProduct={deleteProduct}/>);

  fireEvent.click(getByText("delete"));
  
  expect(deleteProduct).toHaveBeenCalledTimes(1)
});