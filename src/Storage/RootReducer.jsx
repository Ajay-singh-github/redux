const initialState = { employeeData: {} }


/*
initialState.employeeData[action.payload[0]] = action.payload[1]

var obj = {name:"",address""}

 obj.name = "rahul"
 obj[name] = "rahul"

*/

export default function RootReducer(state = initialState , action)
{
    switch(action.type)
    {
        case "ADD_EMPLOYEE":
                state.employeeData[action.payload[0]] = action.payload[1]
                console.log(state.employeeData)
                return {employeeData:state.employeeData}
    
        case "DEL_EMPLOYEE":
               alert("Yes it is ready to delete the data in this object.")
               break

        case "EDIT_EMPLOYEE":
             state.employeeData[action.payload[0]] = action.payload[1]
             return {employeeData:state.employeeData}
        default:
            return {employeeData:state.employeeData}
    }
}
