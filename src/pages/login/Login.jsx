import { Box,Button,styled, TextField, Typography } from '@mui/material'
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Components = styled(Box)`
display:flex;
flex-direction:column;
width:700px;
height:500px;
align-items:center;
justify-content:center;
margin:auto;
margin-top:150px;
padding:5;
border-radius:5;
box-shadow:5px 5px 10px #ccc;
`;


const Login = () => {
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [allentry,setallentry] = useState([]);

   const submitform =(e) => {
    e.preventDefault();
    const newentry = {email:email,password:pass};

    setallentry([...allentry,newentry]);
    console.log(allentry);



   }
  return (
    <Box>
<form action="" onSubmit={submitform}> 
				<Components sx={{
                    ":hover":{
                        boxShadow : "10px 10px 20px #ccc" 
                    }}}> 
                    <Typography variant='h2' padding={3} textAlign="center">Login</Typography>
                    <TextField margin='normal'  type={"email" } variant="outlined" placeholder='email' autoComplete='off' value={email} 
                     onChange={(e) => setemail(e.target.value)}/>
                   
                    <TextField margin='normal'  type={"password" } variant="outlined" placeholder='password' autoComplete='off' value={pass}
                    onChange ={(e) => setpass(e.target.value)}  />
                  <Link to="/home"> <Button variant='contained' color='warning'>Login</Button></Link>
                   
					
				</Components> 
				
			</form>
 </Box>
  )
}

export default Login
