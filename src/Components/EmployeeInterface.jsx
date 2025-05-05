
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function EmployeeInterface() {
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
            <TextField id="outlined-basic" label="Employee Id" variant="outlined" style={{width:'90%'}}/>
            <TextField id="outlined-basic" label="Employee Name" variant="outlined" style={{width:'90%'}}/>
            <TextField id="outlined-basic" label="Employee City" variant="outlined" style={{width:'90%'}}/>
           <div style={{display:'flex',gap:"100px",marginTop:"30px"}}>
           <Button variant="outlined">Submit</Button>
           <Button variant="outlined">Display</Button>
           </div>
        </Paper>

    </Box>
    )
}