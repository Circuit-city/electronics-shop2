import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import Navbar from './Navbar';

const Admin = () => {
    const [products, setProducts] = useState(false)
    // const [edit,setEdit]  = useState()
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then((data)=>{
          setProducts(data)
        })
    },[])

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
          return str.substr(0, maxLength) + '...';
        } else {
          return str;
        }
      };
    // const updateProducts = async (id) => {
    //   const response = await fetch(`https://circuit-cityy.onrender.com/products/${id}`,{
    //     method: 'PUT',
    //     headers: {
    //       'content-type': 'application/json',
    //     }
    //   })
    // }
    const deleteProduct = async (productId) =>{
      const response = await fetch(`http://localhost:3000/products/${productId}`,{
        method: 'DELETE'
      })
      if(response.ok){
        const updatedProducts = products.filter((product)=>product.id !== productId)
        setProducts(updatedProducts)
      }else{
        alert('Error deleting product')
      }
    }
  return (
    <>
    <Navbar />
    <Link to={`/addproduct`}>addproduct</Link>
    <div className='hero' >
      {products && products.map((item)=>(
        <>  
        
            <div className="product" key={item.id}>
                <div className="pic">
                    <img src={item.image_url} alt="item" />
                </div>
                <div className="content">
                    <Link to={`/admin/${item.id}`}>{item.name}</Link>
                    <p>{truncate(item.description, 50)}</p>
                    <p>ksh {item.price}</p>
                    
                </div>
                <div className="btns">
                  <button >Edit</button>
                  <button onClick={()=>deleteProduct(item.id)}>Delete</button>
                </div>
            </div>
        
            
        </>
      ))}
    </div>
    </>
  )
}

export default Admin
