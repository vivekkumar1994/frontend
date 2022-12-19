import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "./view.css"

const View = () => {
    const [states,setState] = useState({});

    const {id} = useParams();

    useEffect (() => {
        axios.get(`http://localhost:5000/api/get`).then((resp) => setState({...resp.data[0]})).catch((err)=> {
            console.log(err);
        })
    },[id])

  return (
    <div style ={{marginTop:"150px"}}>
        <div className="card">
            
            
            <div className="card-header">
                <p>User contact detail</p>
            </div>
            <div className="container">
           
                 <strong>ID:</strong>
                <span>{id}</span>
                <br/>
                <br/>
               <strong>Name:</strong>
                <span>{states.name}</span>
                <br/>
                <br/>
                
               <strong>Email</strong>
                <span>{states.email}</span>
                <br/>
                <br/>
                 <strong>City</strong>
                <span>{states.city}</span>
                <br/>
                <br/>
               <strong>State:</strong>
                <span>{states.state}</span>
                <br/>
                <br/>
                <strong>Salary:</strong>
                <span>{states.salary}</span>
                <br/>
                <br/>
                <strong>Phone:</strong>
                <span>{states.phone}</span>
                <br/>
                <br/>
                <Link to="/">
                <button><div className="btn btn-edit">Go back</div></button>
                </Link>

            </div>
        </div>
      
    </div>
  )
}

export default View
