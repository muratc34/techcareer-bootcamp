import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
    
    const listProducts = () =>{
      axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setProducts(res.data)
      }).catch(err =>{
        console.log("Error", err);
      })
    }

    useEffect(() => {
      listProducts();
  }, [])

    const deleteProduct = (id) =>{
      var result = window.confirm("Are you sure?")

        if (result) {
          axios.delete(`https://northwind.vercel.app/api/products/${id}`)
          .then(res =>{
            listProducts()
          })
        }
    }

  return (
    <table className='w3-table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Units In Stock</th>
          <th>Delete Product</th>
        </tr>
      </thead>
      <tbody>
        {
          products && products.map((item,key) => (
            <tr className={`${item.unitsInStock === 0 || item.unitsInStock == null ? ('bg-red'): ('')}`}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default ProductsPage