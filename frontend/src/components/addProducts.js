import React from 'react'
import { useEffect,useState } from 'react';
const AddProducts = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        image_url: '',
      });

      useEffect(() => {
        fetch('http://localhost:3000/products')
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
          });
      }, []);

      const addProduct = async () => {
        const response = await fetch('http://localhost:3000/products', {
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
            price: '',
            image_url: '',
          });
        } else {
          alert('Error adding product');
        }
      };
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        addProduct();
      }} >
        <h1>Add Product</h1>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" />
            <label htmlFor="price">Price</label>
            <input type="text" id="price" name="price" />
            <label htmlFor="image_url">Image URL</label>
            <input type="text" id="image_url" name="image_url" />
            <button type="submit">Add Product</button>

        </div>
      </form>
    </div>
  )
 
}

export default AddProducts
