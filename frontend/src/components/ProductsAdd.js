import { useState,useEffect } from "react";
import React from "react";
import './AddProducts.css'
const ProductsAdd = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
      name: '',
      description: '',
      price: 0,
      category_id: 0,
      image: '',
    });
  
    useEffect(() => {
      fetch('https://circuit-cityy-po9y.onrender.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    }, []);
  
    const addProduct = async () => {
      const response = await fetch('https://circuit-cityy-po9y.onrender.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        const data = await response.json();
        setProducts([...products, data]);
        setNewProduct({
          name: '',
          description: '',
          price: 0,
          category_id: 0,
          image: '',
        });
      } else {
        alert('Error adding product');
      }
    };
  
  return (
    <div className="hero2">
    <form onSubmit={(e) => {
      e.preventDefault();
      addProduct();
    }}>
      <div className="top">
        <h1>Add Product</h1>
        {/* <img src='https://53525363.000webhostapp.com/Images/CIRCUIT__1_-removebg-preview.png'  className="img2" alt="pic" /> */}
      </div>
      <div className="big2">
        <label htmlFor="name" className="label">Name</label>
        <input type="text" id="name" name="name" className="input" placeholder="Name of the product" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />

        <label htmlFor="description" className="label">Description</label>
        <textarea cols='30' rows='10' type="text" id="description" name="description" placeholder="Description of the product" className="input-s" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} required/>

        <label htmlFor="price" className="label">Price</label>
        <input type="number" id="price" name="price" className="input"  value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} required />

        <label htmlFor="category" className="label">Category</label>
        <input type="number" id="category_id" name="category" className="input"  value={newProduct.category_id} onChange={(e) => setNewProduct({ ...newProduct, category_id: parseInt(e.target.value) })} required />

        <label htmlFor="image" className="label">Image URL</label>
        <input type="text" id="image" name="image" className="input" placeholder="Image Link" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} required />

        <button type="submit" className="addBtn">Add Product</button>
        
      </div>
    </form>
  </div>
  )
}

export default ProductsAdd
