import { useSelector } from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {LifeLine} from "react-loading-indicators"
import UseFetch from "../CustomeHook/UseFetch";
import { FaHome, FaPencilAlt, FaPortrait, FaProcedures, FaProductHunt, FaProjectDiagram, FaShopify, FaStepBackward } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const Wishlist=()=>{
    let cartProducts=useSelector((state)=>{return state.cart})
    console.log(cartProducts);
    
    return(
        <>
                <Link id="navItem1" to="/ProductList"><FaStepBackward /></Link>
        {cartProducts.length!==0 ?(<section className="products">
            {cartProducts.map(cartProducts=>(
        <Card key={cartProducts.id} style={{ width: '18rem', height:"20rem" }}className="product">
        <center>
            <Card.Img
            variant="top"
            src={cartProducts.image}
            style={{height:"12rem"}} />
        </center>
        <Card.Body style={{gap:"10px", padding:"10px"}}>
            <Card.Title>{cartProducts.title}</Card.Title>
            <Button variant="secondary"style={{marginRight:"10px"}} onClick={()=>{navigate(`/update/${cartProducts.id}`)}}>Buy</Button>
            <Button variant="danger" onClick={()=>handleDelelte(cartProducts.id)}>Del</Button>
        </Card.Body>
            
        </Card>
            ))}
        </section>):
        <h1>Plz Purchase Something</h1>}
        </>
    )
}
export default Wishlist