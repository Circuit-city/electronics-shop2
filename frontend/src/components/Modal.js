import React from 'react'
import './Modal.css'
const Modal = ({editing,setEditing,content,setContent,currentProduct,setCurrentProduct}) => {
    

    const handleCancel = () => {
        setEditing(false)
        setCurrentProduct({})
      }
      
      const handleUpdate = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://circuit-cityy-po9y.onrender.com/products/${currentProduct.id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(currentProduct)
        })
        if(response.ok){
          setEditing(false)
          setCurrentProduct({})
          const updatedProducts = () =>{
            if(content.id === currentProduct.id){
              return currentProduct
            }else{
              return content
            }
        }
          setContent(updatedProducts())
        }else{
          alert('Error updating product')
        }
      }
  return (
    <>
 
   <div className="modalbg">
    <div className="modalContainer">
         {editing && (
             <form onSubmit={handleUpdate} className='form-update'>
                <label htmlFor="name" className='labels'>Name</label>
                <input type="text" value={currentProduct.name} onChange={(event)=>setCurrentProduct({...currentProduct, name: event.target.value})} required/>
                <label htmlFor="description" className='labels'>Description</label>
                <textarea cols='30' rows='10'   className='text-area' type="text" value={currentProduct.description} onChange={(event)=>setCurrentProduct({...currentProduct, description: event.target.value})} required/>
                <label htmlFor="price" className='labels'>Price</label>
                <input type="number" value={currentProduct.price} onChange={(event)=>setCurrentProduct({...currentProduct, price: event.target.value})} required/>
                <label htmlFor="category" className='labels'>Category</label>
                <input type="number" value={currentProduct.category_id} onChange={(event)=>setCurrentProduct({...currentProduct, category_id: event.target.value})} required/>
                <label htmlFor="Image url" className='labels'>Image url</label>
                <input type="text" value={currentProduct.image} onChange={(event)=>setCurrentProduct({...currentProduct, image: event.target.value})} required/>
                <div className="updatebtns">
                    <button type="submit" className='update'>Update</button>
                    <button onClick={handleCancel} className='cancel'>Cancel</button>
                </div>
             </form>
         )}
    </div>
 </div>
  
 
 </>
  )
  
}

export default Modal
