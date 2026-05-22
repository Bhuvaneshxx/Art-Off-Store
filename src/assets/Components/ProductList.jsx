import {Link, useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {LifeLine} from "react-loading-indicators"
import UseFetch from "../CustomeHook/UseFetch";
import { FaHome, FaShopify } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList(){
    let navigate=useNavigate()
    // let [products,setProducts]=useState([])
    // let[error,setError]=useState("")
    // let[isLoading,setIsLoding]=useState(true)
    
    // useEffect(()=>{
    //     fetch("http://localhost:5000/product",{method:"GET"})
    //     .then((response)=>{if(response.ok)
    //         {return response.json()
    //         }else{
    //             throw new Error("Search Proper Data")
    //         }
    //     })
    //     .then((data)=>{setProducts(data);})
    //     .catch((error)=>{
    //     setError(error.message);
    // }).finally(()=>{setIsLoding(false)})
    // },[])

    
    let {products,error,isLoading,setProducts}=UseFetch("https://art-off-backend.onrender.com/product")
    let handleDelelte=(id)=>{
        axios.delete(`https://art-off-backend.onrender.com/product/${id}`)
        .then(()=>{
            alert("data deleted Successfully")
            let newProductList=products.filter(product=>product.id!==id)
            setProducts(newProductList)
        })

    }
    let dispatch=useDispatch()
    let addItemtoCart=(product)=>{
        dispatch(addItem(product))
    }
    if(isLoading){
        return(
            <div className="lifeline">
                <LifeLine color="#865de5ff" size="small" text="Loading" textColor=""  />
            </div>
        )
    }
    else{return(
        <>
        <nav2>
        <Link id='navItem2' to="/"><FaHome /></Link>
        <Link style={{margin:"10px"}}id='navItem2' to="/wishlist"><FaShopify /></Link>

        <input type="text" placeholder="Search"
        onChange={(e)=>setSearchProduct(e.target.value)}
        style={{width:"200px", margin:"40px", outline:"none",padding:"3px",borderRadius:"8px", border:"solid gray 1px"}} />
</nav2>
        <h1 className="product-header">Products</h1>
        <section className="products">
            {products.map(product=>(
        <Card key={product.id} style={{ width: '18rem', height:"20rem" }}className="product">
        <center>
            <Card.Img
            variant="top"
            src={product.image}
            style={{height:"12rem"}} />
        </center>
        <Card.Body style={{gap:"10px", padding:"10px"}}>
            <Card.Title>{product.title}</Card.Title>
            <Button variant="primary"style={{margin:"10px"}}onClick={()=>{addItemtoCart(product)}}>Add to cart</Button>
            <Button variant="secondary"style={{marginRight:"10px"}} onClick={()=>{navigate(`/update/${product.id}`)}}>Update</Button>
            <Button variant="danger" onClick={()=>handleDelelte(product.id)}>Del</Button>
        </Card.Body>
            
        </Card>
            ))}
        </section>
        {error &&<h1>{error}</h1>}
        </>
    )}
}
export default ProductList;
