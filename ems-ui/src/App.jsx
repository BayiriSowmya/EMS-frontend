import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allemployees from './Components/Allemployees'
import HeaderComponent from './Components/HeaderComponent'

import { BrowserRouter, Routes,Route} from 'react-router-dom'
import EmployeeComponent from './Components/employeeComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
     <HeaderComponent />
     <Routes>
        <Route path ="/" element = { <Allemployees />}></Route>
        <Route path ="/employees" element = { <Allemployees />}></Route>
        <Route path ="/add-employee" element = { <EmployeeComponent />}></Route>
        <Route path ="/edit-employee/:id" element = { <EmployeeComponent />}></Route>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App




