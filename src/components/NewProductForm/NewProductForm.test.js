import React from 'react';
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
  // Assert
  expect(onAddProduct).toHaveBeenCalledTimes(1);
  expect(submitButtonNode.type).toBe("submit");
})
