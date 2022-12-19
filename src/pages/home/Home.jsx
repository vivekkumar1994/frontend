import React from 'react';
import "./home.css"
import axios from "axios";
import { toast, Toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data,setdata] = useState([]);


    const loaddata = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setdata(response.data)
    };

    useEffect(() =>{
        loaddata()
    },[]);

    const deletecontext = (id) => {
        if(window.confirm("are you sure to delete this user")){
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            toast.success("user deleted now");
            setTimeout(() => {
                loaddata();
            }, 5000);
        }

    }

  return (
    <div style={{marginTop:"150px"}}>

     <table className='styled_table'>
       <thead>
           <tr>
            <th style={{textAlign:'center'}}>S.no</th>
            <th style={{textAlign:'center'}}>Name</th>
            <th style={{textAlign:'center'}}>Email</th>
            <th style={{textAlign:'center'}}>City</th>
            <th style={{textAlign:'center'}}>State</th>
            <th style={{textAlign:'center'}}>Salary</th>
            <th style={{textAlign:'center'}}>Phone</th>
           </tr>
       </thead>  
         <tbody>
            {data.map((item,index) => {
                return(
                    <tr key={item.id}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>{item.salary}</td>
                        <td>{item.phone}</td>
                        <td style={{display:"flex"}}>
                        <Link to={`/add`}>
                            <button className='btn btn-contact'>Add</button>
                            </Link>
                            <Link to={`/update/${item.id}`}>
                            <button className='btn btn-edit'>Edit</button>
                            </Link>
                            <button className='btn btn-delete' onClick={() => deletecontext(item.id)}> Delete</button>
                            <Link to={`/view/${item.id}`}>
                            <button className='btn btn-view'>View</button>
                            </Link>
                        </td>
                    </tr>
                )

            })}</tbody>  
     </table>
    </div>
  )
}

export default Home
