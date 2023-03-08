import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default class AddItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state={id:0,name:"",brand:"",category:"",count:0,cost:0};
    }
    handleIdChange=(e)=>{
        this.setState({id:e.target.value})
    }
    handleNameChange=(e)=>{
        this.setState({name:e.target.value})
    }
    handleBrandChange=(e)=>{
        this.setState({brand:e.target.value})
    }
    handleCategoryChange=(e)=>{
        this.setState({category:e.target.value})
    }
    handleCountChange=(e)=>{
        this.setState({count:e.target.value})
    }
    handleCostChange=(e)=>{
        this.setState({cost:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/post",this.state);
    }
    render()
    {
        return(
            <>
            <center>
            <form onSubmit={this.handleSubmit}>
            <label>Id:</label>
                <input type="number" onChange={this.handleIdChange}>
                </input><br/><br/>
                <label>Name:</label>
                <input type="text" onChange={this.handleNameChange}>
                </input><br/><br/>
                <label>Brand:</label>
                <input type="text" onChange={this.handleBrandChange}>
                </input><br/><br/>
                <label>Category:</label>
                <input type="text" onChange={this.handleCategoryChange}>
                </input><br/><br/>
                <label>Count:</label>
                <input type="number" onChange={this.handleCountChange}>
                </input><br/><br/>
                <label>Cost:</label>
                <input type="number" onChange={this.handleCostChange}>
                </input><br/><br/>
            <input type="submit" style={{color:"white",padding:"6px 8px",backgroundColor:"green",font:"14px"}}/><br/><br/><br/><br/>
            <Link to="/"><Button startIcon={<ArrowBackOutlinedIcon/>}>Back</Button></Link>
            </form>
            </center>
            </>
        )
    }
}