import {Paper,Typography,Grid,TextField,Button} from '@mui/material'
import { useState } from 'react'
function NewProduct(){
    let paperstyle={
        width:400,
        marginTop:"70px",
        margin:"auto",
        padding:"20px"
    }
let [newproduct,setNewProduct]=useState({
    title: "",
    price: "",
    description: "string",
    category: "",
    image: "",
    rating:{
        rate:0,
        count:0
    }
})
    let handleChange=(e)=>{
        let{value,name}=e.target
        let fieldName=name.split("rating.")[1]
        
        if(name.includes("rating.")){
        setNewProduct({
            ...newproduct,
            rating:{
                ...newproduct.rating,
                [fieldName]:value
            }
})
        }
        else{
        setNewProduct({
            ...newproduct,
            [name]:value
        });}
// console.log(newproduct);
    }
    let handleAdd=(e)=>{
        e.preventDefault()
        fetch("https://art-off-backend.onrender.com/product",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newproduct)
        }).then(()=>{
            alert("Data added successfully")
            setNewProduct(
                {
    
    title: "",
    price: "",
    description: "string",
    category: "",
    image:"",
    rating:{
        rate:0,
        count:0
    }
}
            )
        })
        console.log("hi");
        
}

    
    return(
        
        <Paper elevation={20} style={paperstyle}>
            <form action="" onSubmit={handleAdd}>
            <Grid style={{display:"grid",gap:"20px"}}  >
        <Typography variant='h5' textAlign='center'>Create new Product</Typography>
                <TextField value={newproduct.title} name='title' label="Title" onChange={handleChange} variant='outlined'fullWidth/>
            <TextField value={newproduct.category} label="Category" name='category' onChange={handleChange} variant='outlined'fullWidth/>
            <TextField value={newproduct.image} label="Image" name='image' onChange={handleChange} variant='outlined'fullWidth/>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <TextField value={newproduct.rating.rate} type='number' name='rating.rate' label="Rate" onChange={handleChange} variant='outlined'fullWidth/>
                </Grid>
                <Grid size={6}>
                    <TextField value={newproduct.rating.count} type='number' name='rating.count' label="Count" onChange={handleChange} variant='outlined'fullWidth/>
                </Grid>
            </Grid>
            <TextField value={newproduct.price} label="Price" name='price' onChange={handleChange} variant='outlined'fullWidth/>
            <Button variant='contained' type='submit'> ADD</Button>
            </Grid>
</form>
        </Paper>
        
    )
}
export default NewProduct