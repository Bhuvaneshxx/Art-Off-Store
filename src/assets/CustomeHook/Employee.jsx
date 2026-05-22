import { useState } from "react"

function Employee(){
    let [employee,setEmployee]=useState("")
    let[name,setName]=useState("")

    let handleAdd=()=>{
        
        setEmployee(name)
    }
    return(
        <div style={{display:"flex"}}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"placeholder="Employee name" /><br/>
        <span>{employee}</span>
        <button onClick={handleAdd}>Add</button>
        </div>
    )
}export default Employee