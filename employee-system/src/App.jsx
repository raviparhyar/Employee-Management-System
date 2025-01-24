import { useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthProvider"


function App() {
  const [user, setUser] = useState()
  const authData = useContext(AuthContext)
  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123"){
      setUser("admin")} 
      else if (){
        setUser("employee")}
        else{alert("Invalid Crendtials");
        }}
return (
<>
{!user ? <Login handleLogin= {handleLogin}/> :''}
{user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>}
{/* {user == "employee" ? <EmployeeDashboard/> : ''} */}
</>
)
}
export default App