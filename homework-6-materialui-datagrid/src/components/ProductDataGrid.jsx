import { Button, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductDataGrid = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res =>{
                setProducts(res.data)
            }).catch(err =>{
                console.log(err);
            })
    }

    const deleteProduct = (id) => {
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res =>{
                window.confirm("Are you sure ?")
                alert(res.data)
                getProducts();
            })
            .catch(err =>{
                alert(err)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    const columns = [
        { field: 'id', headerName: 'Id', width: 150 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'unitPrice', headerName: 'Unit Price', width: 250 },
        { field: 'unitsInStock', headerName: 'Units In Stock', width: 250 },
        { field: 'delete', headerName: 'Delete', width: 250, renderCell: (e) => (
            <Button variant="contained" onClick={() => deleteProduct(e.row.id)}>Delete</Button>) 
        }
    ]

  return (
    <Container>
        <DataGrid columns={columns} rows={products} getRowClassName={(e) => e.row.unitsInStock <= 0 ? `red` : ``  }/>
    </Container>
  )
}

export default ProductDataGrid