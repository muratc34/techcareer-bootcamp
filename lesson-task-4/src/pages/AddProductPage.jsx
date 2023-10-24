import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddProductPage = () => {
  const [name, setName] = useState("")
  const [unitPrice, setUnitPrice] = useState("")
  const [unitsInStock, setUnitsInStock] = useState("")
  const addProduct = () =>{
    axios.post('https://northwind.vercel.app/api/products', {
      name: name,
      unitPrice: unitPrice,
      unitsInStock: unitsInStock
    })
      .then(res =>{
        console.log(res)
    })
  }

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form className='form'>
        <div className='form-name'>
          <label>Name: </label>
          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form-price'>
          <label>Unit Price: </label>
          <input type="number" required value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
        </div>
        <div className='form-stock'>
          <label className='form-stock-label'>Units In Stock: </label>  
          <input className='form-stock-input' type="number" required value={unitsInStock} onChange={(e) => setUnitsInStock(e.target.value)} />
        </div>
        <div>
          <button className='form-btn' type="submit" onClick={addProduct}>Add Product</button>
        </div>
    </form>
    </div>
  )
}

export default AddProductPage