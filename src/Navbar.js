import React from "react";


function Navbar(){
    return(

        <>
        <ul style={{ display : "flex", listStyle : "none", width : "100%",height : "5vh", color : "white", backgroundColor : "blueviolet"}}>
            <li style={{ marginRight : "10rem"}}>Home</li>
            <li style={{ marginRight : "10rem"}}>Aboutus</li>
            <li style={{ marginRight : "10rem"}}>Login</li>
            <li style={{ marginRight : "10rem"}}>Signout</li>
        </ul>
        </>
    )
}
export default Navbar;