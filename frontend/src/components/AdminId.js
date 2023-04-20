import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const AdminId = () => {
    const [content, setContent] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then((data)=>{
            setContent(data)
        })
    },[id])
  return (
    <div >
        {content && 
            <>
                <div className="div">
                <img src={content.image_url} alt="pic" />
                <p>{content.name}</p>
                <p>{content.description}</p>
                <p>{content.price}</p>
                </div>
            </>
        }
    </div>
  )
}

export default AdminId
