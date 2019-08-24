import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { render, fireEvent } from '@testing-library/react';
import Form from './NewProductForm';

test('should submit form with name and price', () => {
  const onAddProduct = jest.fn()
  const {getByLabelText, getByText} = render(<Form onAddProduct={onAddProduct} />)
  const nameNode = getByLabelText('Name')
  const priceNode = getByLabelText('Price')

  const submitButtonNode = getByText('Save')

  expect(nameNode.value).toBe('')
  expect(priceNode.value).toBe('')
  nameNode.value = "Paracetamol"
  priceNode.value = 10

  
  fireEvent.click(submitButtonNode);
const product = {
  id: 1,
  name: nameNode.value,
  prices: [
    {
      id: 1,
      price: parseInt(priceNode.value),
      date: moment(Date.now()).format
    }
  ]
};
  // Assert
  console.log(product)
  expect(onAddProduct).toHaveBeenCalledTimes(1);
  expect(onAddProduct).toHaveBeenCalledWith(product)
  expect(submitButtonNode.type).toBe("submit");

})
