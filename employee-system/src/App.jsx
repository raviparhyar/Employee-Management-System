import { useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashbpard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashbpard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./Utlis/LocalStorage"


function App() {
  
  const [user,setUser] = useState()

  const handleLogin = (email, password) => {
    console.log(email,password);
    
  }

  handleLogin()
  

  return (
    <>
    {!user ? <Login/> : ''}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App