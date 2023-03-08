import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const UpdateItem=()=>
{
    const params=useParams();
    const [Name,setName]=useState("");
    const [Brand,setBrand]=useState("");
    const [Category,setCategory]=useState("");
    const [Count,setCount]=useState(0);
    const [Cost,setCost]=useState(0);

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleBrandChange=(e)=>{
        setBrand(e.target.value)
    }
    const handleCategoryChange=(e)=>{
        setCategory(e.target.value)
    }
    const handleCountChange=(e)=>{
        setCount(e.target.value)
    }
    const handleCostChange=(e)=>{
        setCost(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/update/"+params.id,{id:params.id,name:Name,brand:Brand,category:Category,count:Count,cost:Cost});
    }
        return(
            <>
            <center>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={handleNameChange}>
                </input><br/><br/>
                <label>Brand:</label>
                <input type="text" onChange={handleBrandChange}>
                </input><br/><br/>
                <label>Category:</label>
                <input type="text" onChange={handleCategoryChange}>
                </input><br/><br/>
                <label>Count:</label>
                <input type="number" onChange={handleCountChange}>
                </input><br/><br/>
                <label>Cost:</label>
                <input type="number" onChange={handleCostChange}>
                </input><br/><br/>
            <input type="submit" style={{color:"white",padding:"6px 8px",backgroundColor:"green",font:"14px"}}/><br/><br/><br/><br/>
            <Link to="/"><Button startIcon={<ArrowBackOutlinedIcon/>}>Back</Button></Link>
            </form>
            </center>
            </>
        )
    }
    export default UpdateItem;