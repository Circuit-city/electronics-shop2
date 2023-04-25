import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import './AdminId.css'
import Modal from './Modal'
const AdminId = () => {
    const [content, setContent] = useState(null)
    const [editing, setEditing] = useState(false)
    const [currentProduct, setCurrentProduct] = useState({})
    
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://circuit-cityy-po9y.onrender.com/products/${id}`)
        .then(response => response.json())
        .then((data)=>{
            setContent(data)
        })
        incrementAnalytics(id, 'views')
    },[id])

    const handleEdit = (product) => {
        setCurrentProduct(product)
        setEditing(true)
       
      }
      
      const incrementAnalytics = (productId, type) => {
        const analytics = JSON.parse(localStorage.getItem('analytics')) || {}
        const productAnalytics = analytics[productId] || { views: 0, clicks: 0, sales: 0 }
        productAnalytics[type]++
        analytics[productId] = productAnalytics
        localStorage.setItem('analytics', JSON.stringify(analytics))
      }
    const analytics = JSON.parse(localStorage.getItem('analytics')) || {}
    const productAnalytics = analytics[id] || { views: 0, clicks: 0, sales: 0 }
  return (
    <div className='hero-adminid'>
       <div className="big-adminid">
        {content && 
                <>
                    <div className="div">
                        <div className="img3">
                            <img src={content.image} alt="pic" />
                        </div>
                       <div className="content-id">
                            <p className='bold'>{content.name}</p>
                            <p>{content.description}</p>
                            <p>KSH : {content.price}</p>
                            <div className="analytics">
                                <p>Views: {productAnalytics.views}</p>
                                <p>Clicks: {productAnalytics.clicks}</p>
                                <p>Sales: {productAnalytics.sales}</p>
                            </div>
                            <div className="back">
                               <button onClick={()=>handleEdit(content)} className='editbtn'>Edit</button>
                                <Link to='/admin'>Back</Link>
                            </div>
                            
                            
                       </div>
                    </div>
                </>
            }
           {editing && <Modal editing={editing} setEditing={setEditing} content={content} setContent={setContent} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>}
            
       </div>
    </div>
  )
}

export default AdminId
