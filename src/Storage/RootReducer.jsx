const initialState = { employeeData: {} }

export default function RootReducer(state = initialState , action)
{
    switch(action.type)
    {
        case "ADD_EMPLOYEE":
                alert("Yes it is ready to store the data in this object.")
    
        case "DEL_EMPLOYEE":
               alert("Yes it is ready to delete the data in this object.")

        case "EDIT_EMPLOYEE":
               alert("Yes it is ready to Edit the data in this object.")
        default:
            alert("plz choose right case")
    }
}
