
import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';


const Admin = ({isLoggedIn}) => {
const [products, setProducts] = useState(false)

useEffect(()=>{
fetch('https://circuit-cityy-po9y.onrender.com/products')
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



const deleteProduct = async (productId) =>{
  const response = await fetch(`https://circuit-cityy-po9y.onrender.com/products/${productId}`,{
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


<div className="bigger">
<div className="hero">

{products && products.map((item)=>(

       <div className="product" key={item.id}>
            <div className="pic">
                <img src={item.image} alt="item" />
            </div>
            <div className="content">
                <Link to={`/admin/${item.id}`} className='bold'>{item.name}</Link>
                <p>{truncate(item.description, 50)}</p>
                <p>ksh {item.price}</p>
                <p>category : {item.category_id}</p>

            </div>
            <div className="btns">
              
              <button onClick={()=>deleteProduct(item.id)} className='deletebtn'>Delete</button>
            </div>
        </div>   
        
  ))}
</div>
</div>

</>
)
}

export default Admin