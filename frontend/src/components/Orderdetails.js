import React from 'react';

const OrderDetails = ({ order }) => {
  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Item Name: {order.itemName}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Total Price: {order.totalPrice}</p>
    </div>
  );
};

export default OrderDetails;
