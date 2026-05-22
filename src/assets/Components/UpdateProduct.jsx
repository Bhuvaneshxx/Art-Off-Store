import {Paper,Typography,Grid,TextField,Button} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
function UpdateProduct(){
    let paperstyle={
        width:400,
        margin:"auto",
        padding:"20px"
    }
let [updateProduct,setUpdateProduct]=useState(null)
let {id}=useParams();
let navigate=useNavigate()
useEffect(()=>{
    axios.get(`https://art-off-backend.onrender.com/product/${id}`)
    .then(res=>setUpdateProduct(res.data)
    )
},[])

let handleChange=(e)=>{
        let{value,name}=e.target
        let fieldName=name.split("rating.")[1]
        
        if(name.includes("rating.")){
        setUpdateProduct({
            ...updateProduct,
            rating:{
                ...updateProduct.rating,
                [fieldName]:value
            }
})
        }
        else{
            setUpdateProduct({
                ...updateProduct,
                [name]:value,
            })
        }
// console.log(newproduct);
    }
    let handleSave=(e)=>{
        e.preventDefault()
        fetch(`https://art-off-backend.onrender.com/product/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateProduct)
        }).then(()=>{
            alert("Saved successfully")
            navigate("/productlist")
        })
        //console.log("hi");
        
}
    if(updateProduct!==null)
    {
        return(
        <Paper elevation={20} style={paperstyle}>
            <form action="" onSubmit={handleSave}>
            <Grid style={{display:"grid",gap:"20px"}}  >
        <Typography variant='h5' textAlign='center'>Update Product</Typography>
                <TextField value={updateProduct.title} name='title' label="Title" onChange={handleChange} variant='outlined'fullWidth/>
            <TextField value={updateProduct.category} label="Category" name='category' onChange={handleChange} variant='outlined'fullWidth/>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <TextField value={updateProduct.rating.rate} type='number' name='rating.rate' label="Rate" onChange={handleChange} variant='outlined'fullWidth/>
                </Grid>
                <Grid size={6}>
                    <TextField value={updateProduct.rating.count} type='number' name='rating.count' label="Count" onChange={handleChange} variant='outlined'fullWidth/>
                </Grid>
            </Grid>
            <Button variant='contained' type='submit'> SAVE</Button>
            </Grid>
</form>
        </Paper>
        
    )}else{
        <div>loading..</div>
    }
}
export default UpdateProduct;