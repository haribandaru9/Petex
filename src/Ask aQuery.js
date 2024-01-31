import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AskQuery(){
    const[Query,setQuery]=useState('');

    const onsubmit=async()=>{

    const data={
       Query,

      }
      try{
        const response= await axios.post("http://localhost:8080/api/query",data);
        setQuery('');

    }
    catch(error){
      console.log("error occured",error);
  }
}
    return(
        <>
        <menubar></menubar>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <Link to="/Assessment"><a class="nav-link" href="#">Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/AskQuery"><a class="nav-link" href="#">Ask a Query</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        <div style={{margin:"30px",padding:"50px"}}>
            <h1>Ask Your doubt here</h1>
            <div style={{margin:"20px",padding:"50px"}}>
                <textarea height="2000px" width="900px" value={Query} onChange={(e)=>setQuery(e.target.value)} placeholder="Enter you query"></textarea>
                <button onClick={onsubmit}>SUBMIT</button>
            </div>
        </div>

        </>
    );
}
