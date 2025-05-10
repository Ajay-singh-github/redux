import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useSelector} from  "react-redux";


export default function EmployeeDisplay(){
    // const employeeData = useSelector((state)=>state?.employeeData)
    var EmployeeData = [{id:1,name:"rahul",city:'delhi'},{id:2,name:"rahul",city:'delhi'},{id:3,name:"rahul",city:'delhi'}]


    const handleDelete=()=>
    {

    }
    
    
    return(<div style={{width:"100%",height:"100vh",margin:0,padding:0,display:'flex',justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"70%",height:"75vh" ,background:"#edeae1",borderRadius:"5px"}}>
        <table style={{width:"100%",marginTop:"5px"}}>
        <tr style={{width:"100%"}}><th>ID</th><th>Employee Name</th><th>City</th><th>Action</th></tr>
       
         {
          EmployeeData.map((item)=>(
            <tr > 
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td style={{display:"flex",justifyContent:'space-evenly',}}>
                <DeleteIcon/><EditIcon/>
                </td> 
            </tr>
          ))
         }

       
        </table>
      </div>
    </div>)
}


