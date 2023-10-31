import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { object, string, number} from 'yup';

const addProductSchema = object().shape({
    name: string().max(50, 'Çok uzun bir değer girdiniz!').required('Boş geçilemez'),
    stock: number('Sayı giriniz!').required('Boş geçilemez'),
    unitPrice: number('Sayı giriniz!').required('Boş geçilemez'),
    quantityPerUnit: number('Sayı giriniz!').required('Boş geçilemez')
});

const AddProductForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            stock: '',
            unitPrice: '',
            quantityPerUnit: ''
        },
        validationSchema: addProductSchema,
        onSubmit: values => {
            addProduct(values)
        },
    });

    const addProduct = (data) => {
        axios.post('https://northwind.vercel.app/api/products', data)
            .then(res => {
                console.log(res);
                alert('Success')
            })
    }

  return (
    <div>
        <Grid container>
            <h1>Add Product</h1>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <label>Name: </label>
                    <input
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {
                        formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : <></>
                    }
                </Grid>
                <Grid item md={6} xs={12}>
                    <label>Stock: </label>
                    <input
                        name='stock'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.stock}
                    />
                    {
                        formik.errors.stock ? <span style={{ color: 'red' }}>{formik.errors.stock}</span> : <></>
                    }
                </Grid>
                <Grid item md={6} xs={12}>
                    <label>Unit Price: </label>
                    <input
                        name='unitPrice'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.unitPrice}
                    />
                    {
                        formik.errors.unitPrice ? <span style={{ color: 'red' }}>{formik.errors.unitPrice}</span> : <></>
                    }
                </Grid>
                <Grid item md={6} xs={12}>
                    <label>Quantity Per Unit: </label>
                    <input
                        name='quantityPerUnit'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.quantityPerUnit}
                    />
                    {
                        formik.errors.quantityPerUnit ? <span style={{ color: 'red' }}>{formik.errors.quantityPerUnit}</span> : <></>
                    }
                </Grid>
                <Grid item md={6} xs={12}>
                    <button type='submit'>Add</button>
                </Grid>
            </Grid>
        </form>
    </div>
    
  )
}

export default AddProductForm