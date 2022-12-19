import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./addedit.css";




const intaialstate = {
    name:"",
    email:"",
    city:"",
    state:"",
    salary:"",
    phone:"",
}
const AddEdit = () => {
    const [states,setState] = useState(intaialstate);
    const {name,email,city,state,salary,phone}= states;
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setState({...resp.data[0]}));
    },[id])

    const handleSubmit = (e) => {

        if(!name || !email || !city || !state || !salary || !phone){
            toast.error("please provide valid input field");
        }
        else{
            if(!id ){
                axios.post("http://localhost:5000/api/post",{name,email,city,state,salary,phone}).then(()=> {
                    setState({name:"",email:"",city:"",state:"",salary:"",phone:""})
                }).catch((error)=> {
                    toast.error(error.response.data)})
                    toast.success("connected  added to the database")
            }
            else{
                axios.put(`http://localhost:5000/api/update/${id}`,{name,email,city,state,salary,phone}).then(()=> {
                    setState({name:"",email:"",city:"",state:"",salary:"",phone:""})
                }).catch((error)=> {
                    toast.error(error.response.data)})
                    toast.success("connected  updated to the database succesfully")
            }
                

            }
           

                setTimeout(() => {
                  navigate("/")
                    
                }, 5000);
            
        
    }

    const handleInputchange = (e) => {
        const {name,value} = e.target;
        setState({...states,[name]:value});

    }

  return (
    <div style={{marginTop:"100px"}}>
        <form 
        style={{margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center"
                  }}  onSubmit={handleSubmit}>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name'  placeholder='your name' value={name ||  ""} onChange={handleInputchange}/>
                    <label htmlFor="name">Email</label>
                    <input type="email" id="email" name='email'  placeholder='your mail' value={email || ""} onChange={handleInputchange}/>
                    <label htmlFor="name">city</label>
                    <input type="text" id="city" name='city'  placeholder='your city' value={city || ""} onChange={handleInputchange}/>
                    <label htmlFor="name">State</label>
                    <input type="text" id="state" name='state'  placeholder='your state' value={state || ""} onChange={handleInputchange}/>
                    <label htmlFor="name">salary</label>
                    <input type="text" id="salary" name='salary'  placeholder='your salary' value={salary || ""} onChange={handleInputchange}/>
                    <label htmlFor="name">phone</label>
                    <input type="number" id="phone" name='phone'  placeholder='your phone' value={phone || ""} onChange={handleInputchange}/>
                  
                     <input type="submit"  value={id ? "update" : "save"}/>
                     <Link to ="/">  <input type="button"  value="go to home"/> </Link>
                  </form>

    </div>
  )
}

export default AddEdit
