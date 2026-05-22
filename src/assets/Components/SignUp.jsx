import { useEffect, useState } from "react"

function SignUp(){

let[name,setName]=useState("")
let[pass,setPass]=useState("")
let[email,setEmail]=useState("")
let[uid,setUid]=useState("")

let [error1,setError1]=useState("")
let [error2,setError]=useState("")
let [error3,setError3]=useState("")
let [error4,setError4]=useState("")


let handleUpdate=(e)=>{
    e.preventDefault()

    if(name===""){
        setError1("*Name is required");
    }
    if(email===""){
        setError("*Email is required");
    }
    if(uid===""){
        setError3("*Enter valid userId")
    }
    if(pass===""){
        setError4("*Password is required")
    }
    console.log("hello");
}
return(
    <><form >
        <h1 id="header">Sign Up</h1>
        <label htmlFor="" id="fullName">FullName</label>
        <input id="fullNameIn" value={name} onChange={(e)=>setName(e.target.value)}/>
        <span id="nameError">{error1}</span>
        <label htmlFor="" id="email">Email Id</label>
        <input type="text" id="emailIn"value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <span id="emailError">{error2}</span>
        <label htmlFor="" id="uid">UserID</label>
        <input type="text" id="uidIn"value={uid} onChange={(e)=>setUid(e.target.value)}/>
        <span id="uidError">{error3}</span>
        <label htmlFor="" id="pass">Password</label>
        <input type="password" id="passIn"value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <span id="passError">{error4}</span>
    </form>
    <p>Already have a accout?<a href="/Login">Login</a></p>
    <button id="signup" onClick={handleUpdate}>Sign Up</button>
    </>
)
}
export default SignUp