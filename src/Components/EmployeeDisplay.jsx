import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';


export default function EmployeeDisplay() {
    const employeeData = useSelector((state)=>state?.employeeData)
    const valueofemployeedata = Object.values(employeeData || {})
   

    const handleDelete = () => {

        Swal.fire({
            title: "Do You Want To Delete The Data?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
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

    return (
        <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0, display: 'flex', justifyContent: "center", alignItems: "center" }}>
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
                                        <EditIcon />< DeleteIcon onClick={() => handleDelete()} style={{ cursor: 'pointer' }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}