import { Routes, Route} from "react-router-dom"

import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"


function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
     
    </div>
  )
}

 export default App
