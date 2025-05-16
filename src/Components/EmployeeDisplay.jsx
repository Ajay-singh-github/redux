import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function EmployeeDisplay() {
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const employeeData = useSelector((state) => state?.employeeData)
    const valueofemployeedata = Object.values(employeeData || {})
    const [editstatus, setEditStatus] = useState(false)
    const [employeeid, setEmployeeId] = useState()
    const [employeename, setEmployeeName] = useState()
    const [employeecity, setEmployeeCity] = useState()

    const handleDelete = (id) => {
        dispatch({type:"DEL_EMPLOYEE",payload:[id]})

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Employee Data has been saved successfully!",
            showConfirmButton: false,
            timer: 1500
        });


        // Swal.fire({
        //     title: "Do You Want To Delete The Data?",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success"
        //         });
        //     }
        // });
    };

    // Define styles
    const tableStyle = {
        width: "100%",
        marginTop: "5px",
        borderCollapse: "collapse"
    };

    const headerStyle = {
        backgroundColor: "#ccc",
        textAlign: "center",
        padding: "8px",
        border: "1px solid #ddd"
    };

    const rowStyle = {
        borderBottom: "1px solid #ddd"
    };

    const cellStyle = {
        textAlign: "center",

        padding: "8px",
        border: "1px solid #ddd"
    };

    const handleEdit = (item) => {
        setEmployeeId(item.id)
        setEmployeeName(item.name)
        setEmployeeCity(item.city)

        console.log("EMPLOYEE DATA:", item)
        setEditStatus(true)
    }

    const handleUpdate = () => {
        dispatch({ type: "EDIT_EMPLOYEE", payload: [employeeid, { "id": employeeid, "name": employeename, "city": employeecity }] })
    }

    return (
        <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0, display: 'flex', justifyContent: "center", alignItems: "center" }}>
            {
                editstatus ?
                    <Box
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
                        <Paper style={{ display: 'flex', flexDirection: 'column', gap: "30px", alignItems: 'center' }}>

                            <TextField value={employeeid} id="outlined-basic" label="Employee Id" variant="outlined" style={{ width: '90%' }} onChange={(e) => setEmployeeId(e.target.value)} />

                            <TextField value={employeename} id="outlined-basic" label="Employee Name" variant="outlined" style={{ width: '90%' }} onChange={(e) => setEmployeeName(e.target.value)} />
                            <TextField value={employeecity} id="outlined-basic" label="Employee City" variant="outlined" style={{ width: '90%' }} onChange={(e) => setEmployeeCity(e.target.value)} />

                            <div style={{ display: 'flex', gap: "100px", marginTop: "30px" }}>
                                <Button variant="outlined" onClick={() => handleUpdate()}>Update</Button>
                                <Button variant="outlined" onClick={() => setEditStatus(false)}>Display</Button>
                            </div>
                        </Paper>

                    </Box>
                    :
                    <div style={{ width: "70%", height: "75vh", background: "#edeae1", borderRadius: "5px", overflowY: 'auto' }}>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={headerStyle}>ID</th>
                                    <th style={headerStyle}>Employee Name</th>
                                    <th style={headerStyle}>City</th>
                                    <th style={headerStyle}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    valueofemployeedata.map((item) => (
                                        <tr key={item.id} style={rowStyle}>
                                            <td style={cellStyle}>{item.id}</td>
                                            <td style={cellStyle}>{item.name}</td>
                                            <td style={cellStyle}>{item.city}</td>
                                            <td style={{ display: "flex", justifyContent: 'space-evenly' }}>
                                                <EditIcon onClick={() => handleEdit(item)} style={{ cursor: "pointer" }} />< DeleteIcon onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
            }

        </div>
    );
}