function Login(){
    let handleLogin=()=>{
        console.log("hei");
        
    }
    return(
    <>
    <h1 id="loginHeader">Login</h1>
    <form id="loginform" action="">
        <label htmlFor="">User Id :</label>
        <input type="text" />
        <label htmlFor="">Password :</label>
        <input type="Password" />
    </form>
    <button id="loginButton" onClick={handleLogin}>Login</button>
    </>
    )
}
export default Login