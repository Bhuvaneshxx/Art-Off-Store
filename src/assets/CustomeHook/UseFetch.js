import { useEffect,useState } from "react"
import axios from "axios"
function UseFetch(url){
    let [products,setProducts]=useState([])
    let[error,setError]=useState("")
    let[isLoading,setIsLoding]=useState(true)
    useEffect(()=>{
        let fetchApi=async ()=>{
        try{
            let response=await axios.get(url)
            setProducts(response.data)
        // let response=await fetch(url)
        // if(response.ok){
        //     let data=await response.json()
        //     setProducts(data)
        // }else{
        //     throw new Error("data not found")
        // }
    }catch(error){
            setError(error.message)
        }
    finally{
        setIsLoding(false)
    }
};fetchApi()
    },[])
    return{products,error,isLoading,setProducts}
}
export default UseFetch;