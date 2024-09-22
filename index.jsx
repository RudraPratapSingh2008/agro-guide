import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [crop, setCrop] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!crop || !price || !quantity) {
      alert('Please fill in all fields');
      return;
    }

    const newOrder = {
      crop: crop.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCrop('');
    setPrice('');
    setQuantity('');
  };

  return (
    <div className="container">
      <h1 className="title">Order Management</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Crop:
          <input
            type="text"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="input-field"
            placeholder="Enter crop name"
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
            placeholder="Enter price"
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input-field"
            placeholder="Enter quantity"
          />
        </label>
        <br />
        <button type="submit" className="btn-add-order">
          Add Order
        </button>
      </form>
      <table className="order-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.crop}</td>
              <td>{order.price.toFixed(2)}</td>
              <td>{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <OrderManagement />
  </React.StrictMode>,
  document.getElementById('root')
);