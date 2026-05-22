import { useState } from "react";
import Effect from "./UpdateProduct";
import { Link } from "react-router-dom";
import Employee from "../CustomeHook/Employee";

function WelcomePage(){
// let [color,setColor]=useState("black")
// let changeColour=()=>{

//     let random="#"+(Math.floor(Math.random()*167779))
//     setColor(random);
//     console.log(color);
    

    return(
        <>
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <h1  id="welcome">Art Off</h1>
        <img className="gif" src="https://i.pinimg.com/736x/1a/ad/76/1aad762fe53c9f4b8b49400f977fbe8f.jpg" alt="" />
        <nav>
        <Link id='navItem1' to="/">Home</Link>
        <Link id="navItem1" to="/ProductList">ProductList</Link>
        <Link id='navItem1' to="/newproduct">New Product</Link>
        </nav>
        </>
    )
}
export default WelcomePage

{/* style={{color:color}} */}
{/* <button id="changeButton" onClick={changeColour}>change</button> */}
{/* <Effect/> */}