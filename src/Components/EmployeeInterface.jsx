
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export default function EmployeeInterface() {
    const dispatch = useDispatch()
    const [id , setEmployeeId] = useState()
    const [name , setName] = useState("")
    const [city , setCity] = useState("")

    const handleSubmit = () =>{
        const body={id:id,name:name,city:city}

      dispatch({type:"ADD_EMPLOYEE",payload:[id,body]})

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Employee Data has been saved successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    }
    
    return (<Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: "center",
            '& > :not(style)': {
                m: 1,
                width: 400,
                height: 400,
            },
        }}
    >
        <Paper style={{display:'flex',flexDirection:'column',gap:"30px",alignItems:'center'}}>  

            <TextField id="outlined-basic" label="Employee Id" variant="outlined" style={{width:'90%'}} onChange={(e)=>setEmployeeId(e.target.value)}/>

            <TextField id="outlined-basic" label="Employee Name" variant="outlined" style={{width:'90%'}} onChange={(e)=>setName(e.target.value)}/>
            <TextField id="outlined-basic" label="Employee City" variant="outlined" style={{width:'90%'}} onChange={(e)=>setCity(e.target.value)}/>

           <div style={{display:'flex',gap:"100px",marginTop:"30px"}}>
           <Button variant="outlined" onClick={()=>handleSubmit()}>Submit</Button>
           <Button variant="outlined">Display</Button>
           </div>
        </Paper>

    </Box>
    )
}