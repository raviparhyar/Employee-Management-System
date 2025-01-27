import { useEffect, useState } from "react"
import { Login } from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthProvider"


function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData]= useContext(AuthContext)


const handleLogin = (email, password) => {
  if(email == "admin@me.com" && password == "123"){
    setUser('admin')
     localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"})) 
    } 
    else if (userData){
      const employee = userData.find((e) => e.email == email && e.password ==
      password)
    if(employee){
      setUser("employee")
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({role: "employee"}))
    }}
    else{alert("Invalid Crendtials");
    }}



return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
)
}
export default App