import { useState } from 'react'
import  {BrowserRouter as Router , Routes , Route}  from "react-router-dom";
import EmployeeInterface from './Components/EmployeeInterface';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
           <Route path='employeeinterface' element={<EmployeeInterface/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
